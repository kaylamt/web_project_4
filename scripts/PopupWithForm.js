import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(submitCallback, popupSelector) {
    super(popupSelector);
    this._formElement = this.document.querySelector("form"); //maybe wrong
  }

  _getInputValues() {
    //loops through inputs in form to gather input values
    //return data
    //define data in const


    // this._popupElement.querySelector(".form__input_field_name").value = name;
    // this._popupElement.querySelector("form__input_field_description").value = description;
    // super.open();



  }

}

export default PopupWithForm;

