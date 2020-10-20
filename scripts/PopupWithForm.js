import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(submitCallback, popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector("form");
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const data = {}
    this._formElement.querySelectorAll("input").forEach(input => {
      data[input.name] = input.value;
    })
    return data;
    // inputs.forEach(data => {
    //   this.input.value = data;
    //   return data;
    // }

    //loops through inputs in form to gather input values
    //return data
    //define data in const


    // this._popupElement.querySelector(".form__input_field_name").value = name;
    // this._popupElement.querySelector("form__input_field_description").value = description;
    // super.open();
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (e) => {
      this._submitCallback(e, this._getInputValues());
      super.close();
    });
    super.setEventListeners();
  }
};

export default PopupWithForm;
