const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const saveButton = document.querySelector(".form__save-button");
const popup = document.querySelector(".popup");
const form = document.querySelector(".form");

function togglePopup() {
  popup.classList.toggle("popup_opened");
}

editButton.addEventListener("click", togglePopup);
saveButton.addEventListener("click", togglePopup);

closeButton.addEventListener("click", () => {
  togglePopup();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.keyCode === 13) {
    const inputName = document.querySelector(".form__input-name");
    const inputDescription = document.querySelector(".form__input-description");

    const profileName = document.querySelector(".profile__info-name");
    const profileDescription = document.querySelector(
      ".profile__info-description"
    );

    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;

    togglePopup();
  }
});
