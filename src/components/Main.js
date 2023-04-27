import "../index.css";
import Card from "./Card";
import React from "react";

function Main(props) {
  // const handleEditAvatarClick = () => {
  //   const element = document.querySelector(".popup_type_avatar");
  //   element.classList.add("popup_opened");
  // };

  // const handleEditProfileClick = () => {
  //   const element = document.querySelector(".popup_type_edit");
  //   element.classList.add("popup_opened");
  // };

  // const handleAddPlaceClick = () => {
  //   const element = document.querySelector(".popup_type_add");
  //   element.classList.add("popup_opened");
  // };

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__card">
          <div
            className="profile__avatar"
            onClick={props.handleEditAvatarClick}
          >
            <img
              src={props.avatar}
              alt="аватар"
              className="profile__avatar-img"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name" id="profile-name">
              Жак Ив Кусто
            </h1>
            <button
              type="button"
              className="button button_type_edit"
              aria-label="редактировать"
              onClick={props.handleEditProfileClick}
            ></button>
            <p className="profile__profession">Исследователь океана</p>
          </div>
        </div>
        <button
          onClick={props.handleAddPlaceClick}
          type="button"
          className="button button_type_plus"
          aria-label="добавить"
        ></button>
      </section>
      <section className="elements">
        {props.cards
          ? props.cards.map((card) => (
              <Card
                key={card._id}
                data={card}
                onCardClick={props.handleCardClick}
              />
            ))
          : null}
      </section>
    </main>
  );
}

export default Main;
