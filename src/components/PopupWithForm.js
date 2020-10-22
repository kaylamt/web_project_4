import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(submitCallback, popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector("form");
    this._submitCallback = submitCallback;
    this._runSubmitCallback = this._runSubmitCallback.bind(this);
  }

  _getInputValues() {
    return Object.fromEntries(new FormData(this._formElement));
  }

  _runSubmitCallback(e) {
    this._submitCallback(e, this._getInputValues());
    this.close();
  }

  close() {
    this._formElement.removeEventListener("submit", this._runSubmitCallback);
    this._formElement.reset();
    super.close();
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", this._runSubmitCallback);
    super.setEventListeners();
  }
};

export default PopupWithForm;
