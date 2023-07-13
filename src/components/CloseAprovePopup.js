import PopupWithForm from "./PopupWithForm";
import React from "react";

function CloseAprovePopup({ isOpen, onClose, handleSubmit }) {
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    />
  );
}

export default CloseAprovePopup;
