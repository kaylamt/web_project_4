import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(imageTitleSelector, imageSelector, popupSelector) {
    super(popupSelector);
    this._imageTitleElement = document.querySelector(imageTitleSelector);
    this._imageSelector = document.querySelector(imageSelector);

  }

  open(name, link) {
    this._popupElement.querySelector(".popup__image-title").textContent = name;
    this._popupElement.querySelector(".popup__image").src = link;
    super.open();
  }

}

export default PopupWithImage;