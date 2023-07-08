import "../index.css";
import Card from "./Card";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__card">
          <div
            className="profile__avatar"
            onClick={props.handleEditAvatarClick}
          >
            {currentUser && (
              <img
                src={props.avatar}
                alt={currentUser.name}
                className="profile__avatar-img"
              />
            )}
          </div>
          <div className="profile__info">
            <h1 className="profile__name" id="profile-name">
              {currentUser ? currentUser.name : "unknown users"}
            </h1>
            <button
              type="button"
              className="button button_type_edit"
              aria-label="редактировать"
              onClick={props.handleEditProfileClick}
            ></button>
            <p className="profile__profession">
              {currentUser ? currentUser.about : "unknown users"}
            </p>
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
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            ))
          : null}
      </section>
    </main>
  );
}

export default Main;
