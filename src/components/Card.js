const popupImage = document.querySelector(".popup_type_image");
const imagePopup = popupImage.querySelector(".popup__image");
const popupImageTitle = popupImage.querySelector(".popup__image-title");

class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    cardDeleteButton.addEventListener("click", this._deleteCard);
  }

  _toggleLikeButton() {
    this.classList.toggle("card__like-button_clicked");
  }

  _deleteCard() {
    this._card = document.querySelector(".card");
    this._card.remove();
    // this.closest(".card").remove()
  }

  createNewCardElement() {
    this._card = this._getCardTemplate().cloneNode(true);

    const cardImage = this._card.querySelector(".card__image");

    this._card.querySelector(".card__title").textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();
    return this._card;

  }
}

export default Card;

