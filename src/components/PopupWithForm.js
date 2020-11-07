import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(submitCallback, popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector("form");
    this._submitCallback = submitCallback;
    this._runSubmitCallback = this._runSubmitCallback.bind(this);
    this._button = this._formElement.querySelector("button");
    this._originalButtonTextContent = this._button.textContent;
  }

  _getInputValues() {
    return Object.fromEntries(new FormData(this._formElement));
  }

  _runSubmitCallback(e) {
    this._formElement.querySelector("button").textContent = "Saving..."
    this._submitCallback(e, this._getInputValues());
  }

  open() {
    this._formElement.addEventListener("submit", this._runSubmitCallback);
    super.open()
  }

  close() {
    this._formElement.removeEventListener("submit", this._runSubmitCallback);
    this._formElement.reset();
    this._button.textContent = this._originalButtonTextContent;
    super.close();
  }
};

export default PopupWithForm;
