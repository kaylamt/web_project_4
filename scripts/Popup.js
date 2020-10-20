class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  toggle() {
    if (this._popupElement.classList.contains("popup_opened")) {
      this.close();
    } else {
      this.open();
    }
  }

  _handleEscClose(e) {
    if (e.which == 27) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup__close-button") || e.target === this._popupElement) {
        this.close();
      }
    })
  }
}

export default Popup;