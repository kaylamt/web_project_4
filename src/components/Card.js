const popupImage = document.querySelector(".popup_type_image");
const imagePopup = popupImage.querySelector(".popup__image");
const popupImageTitle = popupImage.querySelector(".popup__image-title");


class Card {
  constructor({ currentUserId, data, deleteInputSelector, handleCardClick, handleDeleteClick, handleLikeClick, openDeleteConfirmation }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
    this._deleteInputElement = document.querySelector(deleteInputSelector);
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._currentUserId = currentUserId;
    this._ownerId = data.owner._id;
    this._openDeleteConfirmation = openDeleteConfirmation;
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
    likeButton.addEventListener("click", (e) => {
      const shouldAddLike = !e.target.classList.contains("card__like-button_clicked");
      this._handleLikeClick(this._id, shouldAddLike).then(res => {
        this._card.querySelector(".card__like-count").textContent = res.likes.length;
        e.target.classList.toggle("card__like-button_clicked");
      }).catch(error => console.log(error));
    });

    if (this._currentUserId === this._ownerId) {
      const cardDeleteButton = this._card.querySelector(".card__delete-button");
      cardDeleteButton.addEventListener("click", () => {
        this._deleteInputElement.value = this._id;
        this._openDeleteConfirmation();
      })
    }
  }

  deleteCard() {
    this._handleDeleteClick(this._id).then(_res => {
      this._card.remove();
      delete this._card;
    }).catch(error => console.log(error));
  }

  createNewCardElement() {
    this._card = this._getCardTemplate().cloneNode(true);

    const cardImage = this._card.querySelector(".card__image");

    this._card.querySelector(".card__title").textContent = this._name;
    this._card.querySelector(".card__like-count").textContent = this._likes.length;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    if (this._currentUserId !== this._ownerId) {
      const cardDeleteButton = this._card.querySelector(".card__delete-button");
      cardDeleteButton.remove();
    }

    if (this._likes.find(user => user._id === this._currentUserId)) {
      this._card.querySelector(".card__like-button").classList.add("card__like-button_clicked");
    }

    this._setEventListeners();
    return this._card;

  }
}

export default Card;

