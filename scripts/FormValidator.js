class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showErrorMessage(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;

    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = "";

    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input, form, rest) {
    if (input.validity.valid) {
      this._hideErrorMessage(input, form, rest)
    } else {
      this._showErrorMessage(input, form, rest)
    }
  }

  _toggleButtonState() {
    const isValid = this._inputs.every((input) => input.validity.valid);
    const button = this._form.querySelector(this._submitButtonSelector);

    if (isValid) {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    const buttonElement = this._form.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", ((e) => {
      e.preventDefault()
    }))

    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input, form);
        this._toggleButtonState();
      })
      input.addEventListener("invalid", (e) => {
        e.preventDefault();
      })
    })
  }
}

export default FormValidator;
