import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";

function App() {
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [profile, setProfile] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        console.log(`res %o`, res);
        setProfile(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        console.log(`cards %o`, cards);
        setCards(cards);
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
    console.log("123");
  };

  const onSelectedImage = (item) => {
    console.log(item);
    setSelectedCard(item);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          handleEditAvatarClick={onEditAvatar}
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          avatar={profile ? profile.avatar : null}
          handleCardClick={onSelectedImage}
          cards={cards}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            className="popup__input popup__input_type_name"
            id="user-name"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="user-name-error" className="error"></span>
          <input
            type="text"
            name="profession"
            className="popup__input popup__input_type_profession"
            id="user-profession"
            minLength="2"
            maxLength="400"
            required
          />
          <span id="user-profession-error" className="error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="name"
            type="text"
            className="popup__input popup__input_type_place"
            placeholder="Название"
            id="place-name"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="place-name-error" className="error"></span>
          <input
            name="link"
            type="url"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            id="place-link"
            required
          />
          <span id="place-link-error" className="error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="link"
            type="url"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            id="place-link-ava"
            required
          />
          <span id="place-link-err" className="error"></span>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
