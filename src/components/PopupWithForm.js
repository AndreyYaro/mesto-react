import React from "react";

function PopupWithForm(props) {
  return props.isOpen ? (
    <div
      className={`popup popup_type_${props.name}`}
      //style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button
          type="button"
          className="button button_type_close popup__close"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name="adding-info"
          className={`popup__form popup__form_type_${props.name}`}
          noValidate
        >
          {props.children}
          <button
            type="submit"
            className="button button_type_save popup__button"
            aria-label=""
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

export default PopupWithForm;
