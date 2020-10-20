class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classlist.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
    document.addEventListener("click", this._handleClickClose);
  }

  close() {
    this._popupElement.classlist.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    document.removeEventListener("click", this._handleClickClose);
  }

  toggle() {
    if (this._popupElement.contains("popup_opened")) {
      this.close();
    } else {
      this.open();
      this.setEventListeners();
    }
  }

  _handleClickClose(e) {
    if (e.target === this._popupElement) {
      this.close();
    }
  }

  _handleEscClose(e) {
    if (e.which == 27) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classlist.contains("popup__close-button") || !e.target.closest("popup__container")) {
        this.close();
      }
    })
  }
}

export default Popup;