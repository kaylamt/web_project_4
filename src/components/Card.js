import Popup from "./Popup.js";

const popupImage = document.querySelector(".popup_type_image");
const imagePopup = popupImage.querySelector(".popup__image");
const popupImageTitle = popupImage.querySelector(".popup__image-title");


class Card {
  constructor({ data, handleCardClick, handleDeleteClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
    this._handleDeleteClick = handleDeleteClick;
    this._deleteInstance = new Popup(".popup_type_delete-card");
  }

  id() {
    return this._id()
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".card");
    return cardTemplate;
  }

  _setEventListeners() {
    const cardImage = this._card.querySelector(".card__image");
    cardImage.addEventListener("click", () => {

      imagePopup.src = this._link;
      imagePopup.alt = this._name;
      popupImageTitle.textContent = this._name;

      this._handleCardClick(this._name, this._link);
    });

    const likeButton = this._card.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._toggleLikeButton);

    const cardDeleteButton = this._card.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", () => {
      this._deleteInstance.toggle();
    })

    // cardDeleteButton.addEventListener("click", this._deleteCard.bind(this));
  }

  _toggleLikeButton() {
    this.classList.toggle("card__like-button_clicked");
  }

  _deleteCard() {
    this._handleDeleteClick(this._id).then(_res => {
      this._card.remove();
      delete this._card;
    })
  }

  createNewCardElement() {
    this._card = this._getCardTemplate().cloneNode(true);

    const cardImage = this._card.querySelector(".card__image");

    this._card.querySelector(".card__title").textContent = this._name;
    this._card.querySelector(".card__like-count").textContent = this._likes.length;
    cardImage.src = this._link;
    cardImage.alt = this._name;


    this._setEventListeners();
    return this._card;

  }
}

export default Card;

