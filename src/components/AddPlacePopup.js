import react, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ addPlaceSubmit, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleAdditingPopup = () => {
    addPlaceSubmit(name, link);
    setName("");
    setLink("");
  };

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={() => {
        setName("");
        setLink("");
        onClose();
      }}
      handleSubmit={handleAdditingPopup}
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
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span id="place-name-error" className="error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        id="place-link"
        required
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <span id="place-link-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
