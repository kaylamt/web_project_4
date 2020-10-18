class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classlist.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classlist.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
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

// const popupEdit = document.querySelector(".popup_type_edit-profile");
// const popupAdd = document.querySelector(".popup_type_add-card");
// const popupImage = document.querySelector(".popup_type_image");
// setEventListners()