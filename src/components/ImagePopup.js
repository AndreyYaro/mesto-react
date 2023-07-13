import React from "react";

function ImagePopup({ onClose, card }) {
  return (
    <div className={`popup popup-card ${card ? "" : "popup__closed"}`}>
      <div className="popup-card__container">
        <button
          type="button"
          className="button button_type_close popup__close"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
        <img className="popup-card__img" src={card ? card.link : null} />
        <p className="popup-card__text">{card ? card.name : null}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
