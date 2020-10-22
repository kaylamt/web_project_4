import Popup from "./Popup.js";

class PopupWithImage extends Popup {


  open(name, link) {
    this._popupElement.querySelector(".popup__image-title").textContent = name;
    this._popupElement.querySelector(".popup__image").src = link;
    super.open();
  }

}

export default PopupWithImage;