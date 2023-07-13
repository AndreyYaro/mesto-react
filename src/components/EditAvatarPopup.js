import PopupWithForm from "./PopupWithForm";
import React, { useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, updateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const ref = React.useRef();
  useEffect(() => {
    if (currentUser) ref.current.value = currentUser.avatar;
  }, [currentUser]);

  const handleEditAvatarSubmit = () => {
    const src = ref.current.value;
    updateAvatar(src);
  };

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleEditAvatarSubmit}
    >
      <input
        name="link"
        type="url"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        id="place-link-ava"
        required
        ref={ref}
      />
      <span id="place-link-err" className="error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
