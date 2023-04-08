import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_edit">
        <div className="popup__container popup__container_type_edit">
          <button
            type="button"
            className="button button_type_close-edit popup__close"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            name="editing-info"
            className="popup__form popup__form_type_edit"
            noValidate
          >
            <input
              type="text"
              name="name"
              className="popup__input popup__input_type_name"
              id="user-name"
              minLength="2"
              maxLength="40"
              required
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
            />
            <span id="user-profession-error" className="error"></span>
            <button
              type="submit"
              className="button button_type_save popup__button"
              aria-label="сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container popup__container_type_add">
          <button
            type="button"
            className="button button_type_close-add popup__close"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            name="adding-info"
            className="popup__form popup__form_type_add"
            noValidate
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
            />
            <span id="place-name-error" className="error"></span>
            <input
              name="link"
              type="url"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              id="place-link"
              required
            />
            <span id="place-link-error" className="error"></span>
            <button
              type="submit"
              className="button button_type_save popup__button"
              aria-label=""
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button
            type="button"
            className="button button_type_close-edit popup__close"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            name="edit-avatar"
            className="popup__form popup__form_type_avatar"
            noValidate
          >
            <input
              name="link"
              type="url"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              id="place-link-ava"
              required
            />
            <span id="place-link-err" className="error"></span>
            <button
              type="submit"
              className="button button_type_save popup__button"
              aria-label=""
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button
            type="button"
            className="button button_type_close-edit popup__close"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form">
            <button
              type="submit"
              className="button button_type_save popup__button"
            >
              Да
            </button>
          </form>
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default App;
