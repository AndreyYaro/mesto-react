function ImagePopup(props) {
  <div className="popup popup-card">
    <div className="popup-card__container">
      <button
        type="button"
        className="button button_type_close-card popup__close"
        aria-label="закрыть"
      ></button>
      <img className="popup-card__img" />
      <p className="popup-card__text"></p>
    </div>
  </div>;
}

export default ImagePopup;
