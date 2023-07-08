import { isError } from "lodash";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
export default function Card(props) {
  function handleClickDelete() {
    console.log(props.data);
    props.onCardDelete(props.data);
  }

  function handleLikeClick() {
    console.log(`card %o`, props);
    props.onCardLike(props.data);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn =
    currentUser &&
    props.data &&
    props.data.owner &&
    props.data.owner._id === currentUser._id;

  const isLiked =
    currentUser && props.data.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `button element__like ${
    isLiked && "element__like_active"
  }`;

  //console.log(props);
  return (
    <div className="template">
      <article className="element">
        {/* <button
          type="button"
          className="button element__trash"
          aria-label="удалить"
        ></button> */}
        {isOwn && (
          <button
            className="button element__trash"
            onClick={handleClickDelete}
          />
        )}
        <img
          className="element__image"
          src={props.data.link}
          alt={props.data.name}
          onClick={() => {
            props.onCardClick(props.data);
          }}
        />
        <div className="element__name-like">
          <h2 className="element__name">{props.data.name}</h2>
          <div className="element__like-container">
            <button
              type="button"
              className={cardLikeButtonClassName}
              aria-label="нравится"
              onClick={handleLikeClick}
            ></button>
            <span className="element__like-counter">
              {props.data.likes.length}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
