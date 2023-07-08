import React from "react";

function ImagePopup(props) {
  // console.log(props);
  return props.card ? (
    <div className="popup popup-card popup__opened">
      <div className="popup-card__container">
        <button
          type="button"
          className="button button_type_close popup__close"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
        <img className="popup-card__img" src={props.card.link} />
        <p className="popup-card__text">{props.card.name}</p>
      </div>
    </div>
  ) : null;
}

export default ImagePopup;
