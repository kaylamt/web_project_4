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
    // .catch(error => console.log(error))
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
    // .catch(error => console.log(error))
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
    // .catch(error => console.log(error))
  }

  removeCard(cardId) {
    return fetch(this._baseUrl + "/cards/" + cardId, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
    // .catch(error => console.log(error))
  }

  changeLikeCardStatus(cardId, like) {
    const method = like ? "PUT" : "DELETE"
    return fetch(this._baseUrl + "/cards/likes/" + cardId, {
      method: method,
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
    // .catch(error => console.log(error))
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
    // .catch(error => console.log(error))
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
    // .catch(error => console.log(error))
  }
}

export default Api;


