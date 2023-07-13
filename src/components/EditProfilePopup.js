import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import React, { useState, useContext } from "react";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    if (!currentUser) return;
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleSubmit = (e) => {
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
        onClose();
      }}
      handleSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        id="user-name"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
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
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <span id="user-profession-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
