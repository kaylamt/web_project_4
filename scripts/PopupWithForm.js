import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getInputValues(name, description) {
    this._popupElement.querySelector(".form__input_field_name").value = name;
    this._popupElement.querySelector("form__input_field_description").value = description;
    super.open();

  }

}

export default PopupWithForm;