import React from "react";

function PopupWithForm({
  isOpen,
  name,
  title,
  onClose,
  buttonText,
  children,
  handleSubmit,
}) {
  // разметка после условия открытия по-моему в (), или я ошибаюсь?

  return (
    <div className={`popup popup-card ${isOpen ? "" : "popup__closed"}`}>
      {/* <div className={`popup popup_type_${props.name}`}> */}
      <div className={`popup__container popup__container_type_${name}`}>
        <button
          type="button"
          className="button button_type_close popup__close"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          name="adding-info"
          className={`popup__form popup__form_type_${name}`}
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleSubmit();
            // props.onClose();
          }}
        >
          {children}
          <button
            type="submit"
            className="button button_type_save popup__button"
            aria-label=""
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
