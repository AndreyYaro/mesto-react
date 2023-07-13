import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import CloseAprovePopup from "./CloseAprovePopup";

function App() {
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const promises = [api.getInitialCards(), api.getProfile()];
    Promise.all(promises)
      .then((results) => {
        setCards(results[0]);
        setCurrentUser(results[1]);
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

  // const onImagePopup = () => {
  //   setSelectedCardPopupOpen(true);
  // };

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
    const promise = isLiked ? api.deleteLike(card._id) : api.addLike(card._id);
    promise
      .then((newCard) => {
        const newCards = cards.map((c) =>
          c._id === newCard._id ? newCard : c
        );
        setCards(newCards);
        //   setCards((cards) =>
        //     cards.map((c) => (c._id === newCard._id ? newCard : c))
        //   );
      })
      .catch((res) => {
        alert(res);
      });
  }

  function handleCardDelete(card) {
    if (!currentUser) return;
    setCardToDelete(card);
  }

  function handleUpdateUser(newUser) {
    api
      .editProfile(newUser.name, newUser.about)
      .then((resUser) => {
        setCurrentUser(resUser);
        setEditProfilePopupOpen(false);
      })
      .catch((res) => {
        alert(res);
      });
  }

  function handleUpdateAvatar(src) {
    //debugger;
    setCurrentUser({ ...currentUser, avatar: src });
    api
      .editAvatar(src)
      .then((resUser) => {
        console.log(resUser);
        setCurrentUser(resUser);
        setEditAvatarPopupOpen(false);
      })
      .catch((res) => {
        alert(res);
      });
  }

  const handleAddPlaceSubmit = (name, link) => {
    api
      .addCard(name, link)
      .then((res) => {
        setCards([res, ...cards]);
        setAddPlacePopupOpen(false);
      })
      .catch((res) => {
        alert(res);
      });
  };

  const handleSubmitDelete = () => {
    api
      .deleteCard(cardToDelete._id)
      .then((res) => {
        setCardToDelete(null);
        setCards((cards) =>
          cards.filter((item) => item._id !== cardToDelete._id)
        );
      })
      .catch((res) => {
        alert(res);
      });
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
            handleCardClick={onSelectedImage}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            // onClose={() => setEditProfilePopupOpen(false)}
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
            // onClose={() => setEditAvatarPopupOpen(false)}
            onClose={closeAllPopups}
            updateAvatar={handleUpdateAvatar}
          />
          <CloseAprovePopup
            isOpen={!!cardToDelete}
            onClose={closeAllPopups}
            handleSubmit={handleSubmitDelete}
          />
          <ImagePopup
            // isOpen={onImagePopup}
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
