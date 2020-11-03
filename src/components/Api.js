class Api {
  constructor({ baseUrl, headers }) {
    // constructor body
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //GET https://around.nomoreparties.co/v1/groupId/users/me/cards
  getCardList() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
      .catch(error => console.log(error))
  }

  // GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
      .catch(error => console.log(error))
  }

  getAppInfo() {
    //  get user info & cards , then render
  }

  //POST https://around.nomoreparties.co/v1/group-42/cards
  addCard({ name, link }) {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
      method: "POST",
      "Content-type": "application/json",
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
      .catch(error => console.log(error))
  }


  //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  removeCard(cardID) {
    return fetch(this._baseUrl + "/cards" + cardID, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(res => res.ok ? res.json() : Promise.reject("error!" + res.statusText))
      .catch(error => console.log(error))
  }

  //PUT https://around.nomoreparties.co/v1/groupId/cards/cardId
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  changeLikeCardStatus(cardID, like) {

  }

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo({ name, about }) {
    fetch(this._baseUrl + users + me, {
      method: "PATCH",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        about
      })
    });
  }

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar({ avatar }) {

  }

  getInitialCards() {
    // ...
  }
}

export default Api;

  // other methods for working with the API


  // const api = new Api({
  //   baseUrl: "https://around.nomoreparties.co/v1/group-42", //link in project description
  //   headers: {
  //     authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6", //own token
  //     "Content-Type": "application/json"
  //   }
  // });

