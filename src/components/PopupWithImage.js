import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(imageTitleSelector, imageSelector, popupSelector) {
    super(popupSelector);
    this._imageTitleElement = this._popupElement.querySelector(imageTitleSelector);
    this._imageElement = this._popupElement.querySelector(imageSelector);

  }

  open(name, link) {
    this._imageTitleElement.textContent = name;
    this._imageElement.src = link;
    super.open();
  }

}

export default PopupWithImage;