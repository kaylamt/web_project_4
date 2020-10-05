const popupImage = document.querySelector(".popup_type_image");
const imagePopup = popupImage.querySelector(".popup__image");
const popupImageTitle = popupImage.querySelector(".popup__image-title");

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
    // const popupImage = document.querySelector(".popup_type_image");
    // const imagePopup = popupImage.querySelector(".popup__image");
    // const popupImageTitle = popupImage.querySelector(".popup__image-title");
    const cardImage = this._card.querySelector(".card__image");
    cardImage.addEventListener("click", () => {

      imagePopup.src = this._link;
      imagePopup.alt = this._name;
      popupImageTitle.textContent = this._name;

      this._togglePopupFunction(popupImage);
    });

    const likeButton = this._card.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._toggleLikeButton);

    const cardDeleteButton = this._card.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", this._deleteCard);

    // const popupAdd = document.querySelector(".popup_type_add-card");
    // const addButton = document.querySelector(".profile__add-button");
    // addButton.addEventListener("click", () => {
    //   this._togglePopupFunction(popupAdd);
    // });

    // const closeButtonAdd = document.querySelector(".popup__close-button_add-card");
    // closeButtonAdd.addEventListener("click", () => {
    //   this._togglePopupFunction(popupAdd);
    // });
  }

  _toggleLikeButton() {
    this.classList.toggle("card__like-button_clicked");
  }

  _deleteCard() {
    this.closest(".card").remove()
  }

  createNewCardElement() {
    this._card = this._getCardTemplate().cloneNode(true);

    // const likeButton = this._card.querySelector(".card__like-button");
    // likeButton.addEventListener("click", this._toggleLikeButton);

    // const cardDeleteButton = this._card.querySelector(".card__delete-button");
    // cardDeleteButton.addEventListener("click", this._deleteCard);

    const cardImage = this._card.querySelector(".card__image");

    this._card.querySelector(".card__title").textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();
    return this._card;

  }
}

export default Card;