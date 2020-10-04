class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactivevButtonClass = settings.inactivevButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showErrorMessage(input, error) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = this._input.validationMessage;

    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }
  _hideErrorMessage(input, error) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = "";

    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }
  _checkInputValidity(input, form, rest) {
    if (input.validity.valid) {
      hideErrorMessage(input, form, rest)
    } else {
      showErrorMessage(input, form, rest)
    }
  }
  _toggleButtonState(button) {
    const isValid = this.inputs.every((input) => this.input.validity.valid);

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
  enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest }) {
    this._form.addEventListener("submit", ((e) => {
      e.preventDefault()
    }))

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, form, rest);
        toggleButtonState(inputs, button, rest);
      })
      input.addEventListener("invalid", (e) => {
        e.preventDefault();
      })
    })
  }
}


export default FormValidator;

// formSelector: ".form",
//   inputSelector: ".form__input",
//     submitButtonSelector: ".form__save-button",
//       inactiveButtonClass: "form__save-button_disabled",
//         inputErrorClass: "form__input_type_error",
//           errorClass: "popup__error_visible"