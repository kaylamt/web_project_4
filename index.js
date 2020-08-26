const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const form = document.querySelector(".form");
const inputName = document.querySelector(".form__input_name");
const inputDescription = document.querySelector(".form__input_description");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");

function togglePopup() {
  popup.classList.toggle("popup_opened");
  if (popup.classList.contains("popup_opened")) {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  }
}

editButton.addEventListener("click", togglePopup);

closeButton.addEventListener("click", togglePopup);

function submitValue() {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglePopup();
}

form.addEventListener("submit", submitValue);
