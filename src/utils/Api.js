class Api {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getProfile() {
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  editProfile(name, about) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => this._getResponseData(res));
  }

  addCard(name, link) {
    return fetch(`${this._baseURL}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseURL}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  deleteLike(id) {
    return fetch(`${this._baseURL}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  addLike(id) {
    return fetch(`${this._baseURL}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  editAvatar(avatar) {
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Вася",
          profession: "Урод",
        });
      }, 1000);
    });
  }
}

export const api = new Api({
  baseURL: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: "46a2fa10-55cb-4f0b-86d1-fa06cd0fc111",
    "Content-type": "application/json",
  },
});
