import PopupWithForm from "./PopupWithForm";
import React, { useLayoutEffect } from "react";

function EditAvatarPopup(props) {
  const ref = React.useRef();
  useLayoutEffect(() => {
    if (ref.current) ref.current.value = props.src;
  }, []);
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleSubmit={() => {
        const src = ref.current.value;
        props.updateAvatar(src);
      }}
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
