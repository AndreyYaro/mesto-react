import { isError } from "lodash";
import React from "react";
export default function Card(props) {
  function handleClick() {
    console.log(`card ${props.data.card}`);
    props.onCardClick(props.data.card);
  }

  //console.log(props);
  return (
    <div className="template">
      <article className="element">
        <button
          type="button"
          className="button element__trash"
          aria-label="удалить"
        ></button>
        <img
          className="element__image"
          src={props.data.link}
          alt={props.data.name}
          onClick={() => {
            console.log(props.data);
            props.onCardClick(props.data);
          }}
        />
        <div className="element__name-like">
          <h2 className="element__name">{props.data.name}</h2>
          <div className="element__like-container">
            <button
              type="button"
              className="button element__like"
              aria-label="нравится"
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
