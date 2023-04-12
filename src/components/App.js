import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div classNameName="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
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
      </PopupWithForm>
      <PopupWithForm name="add" title="Новое место" buttonText="Создать">
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
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
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
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />
      <ImagePopup />
    </div>
  );
}

export default App;
