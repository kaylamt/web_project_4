
class Card {
  constructor(data, templateSelector, togglePopupFunction) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._togglePopupFunction = togglePopupFunction;
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".card");
    return cardTemplate;
  }

  _setEventListeners() {
    const popupImage = document.querySelector(".popup_type_image");
    const imagePopup = popupImage.querySelector(".popup__image");
    const popupImageTitle = popupImage.querySelector(".popup__image-title");
    const cardImage = this._card.querySelector(".card__image");
    cardImage.addEventListener("click", () => {

      imagePopup.src = this._link;
      imagePopup.alt = this._name;
      popupImageTitle.textContent = this._name;

      this._togglePopupFunction(popupImage);
    });
  }

  _toggleLikeButton() {
    this.classList.toggle("card__like-button_clicked");
  }

  _deleteCard() {
    this.closest(".card").remove()
  }

  createNewCardElement() {
    this._card = this._getCardTemplate().cloneNode(true);

    const likeButton = this._card.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._toggleLikeButton);

    const cardDeleteButton = this._card.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", this._deleteCard);

    const cardImage = this._card.querySelector(".card__image");

    this._card.querySelector(".card__title").textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();
    return this._card;

  }
}

export default Card;