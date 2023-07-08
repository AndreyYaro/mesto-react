import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [profile, setProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getProfile()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) => console.log(err));
  }, []);

  const onEditAvatar = () => {
    setEditAvatarPopupOpen(true);
  };

  const onEditProfile = () => {
    setEditProfilePopupOpen(true);
  };

  const onAddPlace = () => {
    setAddPlacePopupOpen(true);
  };

  const onSelectedImage = (item) => {
    setSelectedCard(item);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setCardToDelete(null);
    setSelectedCard(null);
  };

  function handleCardLike(card) {
    if (!currentUser) return;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const newLikes = isLiked ? api.deleteLike(card._id) : api.addLike(card._id);
    newLikes.then((newCard) =>
      setCards((state) => state.map((c) => (c._id === state._id ? newCard : c)))
    );
  }

  function handleCardDelete(card) {
    if (!currentUser) return;
    setCardToDelete(card);
  }

  function handleUpdateUser(newUser) {
    currentUser.name = newUser.name;
    currentUser.about = newUser.about;
    api.editProfile(newUser.name, newUser.about).catch((res) => {
      alert(res);
    });
  }

  function handleUpdateAvatar(src) {
    //debugger;
    setProfile({ ...profile, avatar: src });
    api.editAvatar(src).catch((res) => {
      alert(res);
    });
  }

  const handleAddPlaceSubmit = (name, link) => {
    api
      .addCard(name, link)
      .then((res) => {
        setCards([res, ...cards]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            handleEditAvatarClick={onEditAvatar}
            handleEditProfileClick={onEditProfile}
            handleAddPlaceClick={onAddPlace}
            avatar={profile ? profile.avatar : null}
            handleCardClick={onSelectedImage}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            addPlaceSubmit={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            updateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm
            name="delete"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={!!cardToDelete}
            onClose={closeAllPopups}
            handleSubmit={() => {
              api
                .deleteCard(cardToDelete._id)
                .then((res) =>
                  setCards(cards.filter((item) => item._id != cardToDelete._id))
                );
            }}
          />
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
