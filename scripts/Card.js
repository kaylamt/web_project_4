

class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this.templateSelector).content.querySelector(".card");
    return cardTemplate;
  }

  _setEventListeners() {
    const imagePopup = popupImage.querySelector(".popup__image");
    const popupImageTitle = popupImage.querySelector(".popup__image-title");
    const popupImage = document.querySelector(".popup_type_image");
    const cardImage = this._card.querySelector(".card__image");
    cardImage.addEventListener("click", () => {

      imagePopup.src = this._link;
      imagePopup.alt = this._name;
      popupImageTitle.textContent = this._name;

      togglePopup(popupImage);
    });
  }

  createNewCard() {


    this._card = this._getCardTemplate.cloneNode(true);

    const likeButton = this._card.querySelector(".card__like-button");
    likeButton.addEventListener("click", toggleLikeButton);

    const cardDeleteButton = this._card.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", deleteCard);

    const cardImage = this._card.querySelector(".card__image");

    this._card.querySelector('.card__title').textContent = data.name;

    this._setEventListeners();
    return this._card;

  }
}