import "../index.css";
import Card from "./Card";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
  handleCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__card">
          <div className="profile__avatar" onClick={handleEditAvatarClick}>
            {currentUser && (
              <img
                src={currentUser.avatar}
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
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__profession">
              {currentUser ? currentUser.about : "unknown users"}
            </p>
          </div>
        </div>
        <button
          onClick={handleAddPlaceClick}
          type="button"
          className="button button_type_plus"
          aria-label="добавить"
        ></button>
      </section>
      <section className="elements">
        {cards
          ? cards.map((card) => (
              <Card
                key={card._id}
                data={card}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))
          : null}
      </section>
    </main>
  );
}

export default Main;
