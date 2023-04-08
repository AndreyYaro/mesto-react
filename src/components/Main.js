import "../index.css";

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__card">
          <div className="profile__avatar">
            <img src="x" alt="аватар" className="profile__avatar-img" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name" id="profile-name">
              Жак Ив Кусто
            </h1>
            <button
              type="button"
              className="button button_type_edit"
              aria-label="редактировать"
            ></button>
            <p className="profile__profession">Исследователь океана</p>
          </div>
        </div>
        <button
          type="button"
          className="button button_type_plus"
          aria-label="добавить"
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
