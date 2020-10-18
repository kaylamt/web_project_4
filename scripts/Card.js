const popupImage = document.querySelector(".popup_type_image");
const imagePopup = popupImage.querySelector(".popup__image");
const popupImageTitle = popupImage.querySelector(".popup__image-title");

class Card {
  constructor({ data, handleCardClick }, templateSelector, togglePopupFunction) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._togglePopupFunction = togglePopupFunction;
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

      this._togglePopupFunction(popupImage);
    });

    const likeButton = this._card.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._toggleLikeButton);

    const cardDeleteButton = this._card.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", this._deleteCard);

    // this._element.querySelector(".card__like-button").addEventListener("click", () => this.handleLikeIcon());

    // this._element.querySelector(".card__delete-button").addEventListener("click", () => this.handleDeleteCard());

    // this._element.querySelector(".card__image").addEventListener("click", () => this._handleCardClick(this.name, this.link));
  }

  _toggleLikeButton() {
    this.classList.toggle("card__like-button_clicked");
  }

  _deleteCard() {
    this.closest(".card").remove()
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

//index.js

const imagePopupInstance = new PopupWithImage(".popup_type_image");
imagePopupInstance._setEventListeners();

new Card(
  {
    data: {..},
    handleCardClick: (name, link) => {
      imagePopupInstance.open(name, link)
    },
    "card-template"
  }
}
