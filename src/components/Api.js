class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCardList() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getCardList()])
  }

  addCard({ name, link }) {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }

  removeCard(cardId) {
    return fetch(this._baseUrl + "/cards/" + cardId, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }

  changeLikeCardStatus(cardId, like) {
    const method = like ? "PUT" : "DELETE"
    return fetch(this._baseUrl + "/cards/likes/" + cardId, {
      method: method,
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }

  setUserInfo({ name, about }) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }

  setUserAvatar(avatar) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
  }
}

export default Api;


