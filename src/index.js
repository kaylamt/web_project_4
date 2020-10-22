import "./pages/index.css";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import initialCards from "./components/initialCards.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";

import { popupEdit, editCardForm, addCardForm, editButton, addButton, closeButtonEdit, inputName, inputDescription } from "./utils/constants.js";

const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible"
}

const popupEditInstance = new PopupWithForm(submitValueEdit, ".popup_type_edit-profile");

const popupAddInstance = new PopupWithForm(submitValueAdd, ".popup_type_add-card");

const popupImageInstance = new PopupWithImage(".popup_type_image");

const sectionInstance = new Section({ items: initialCards, renderer: renderCard }, ".cards")
sectionInstance.renderer();
const userInfoInstance = new UserInfo(
  {
    nameSelector: ".profile__info-name",
    descriptionSelector: ".profile__info-description"
  });

const editFormValidator = new FormValidator(defaultConfig, editCardForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function togglePopupEdit() {
  popupEditInstance.toggle();
  if (popupEdit.classList.contains("popup_opened")) {
    const { name, description } = userInfoInstance.getUserInfo();
    inputName.value = name;
    inputDescription.value = description;
  }
}

function submitValueEdit(e, { name, description }) {
  e.preventDefault();
  userInfoInstance.setUserInfo(name, description);
  togglePopupEdit();
}

function submitValueAdd(e, { title, link }) {
  e.preventDefault();
  const data = {
    name: title,
    link: link
  }
  const element = renderCard(data);
  sectionInstance.addItem(element);
  popupAddInstance.toggle();
}

function renderCard(data) {
  const cardInstance = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        popupImageInstance.open(name, link)
      }
    },
    ".card-template"
  );
  return cardInstance.createNewCardElement();
}

editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

addButton.addEventListener("click", () => {
  popupAddInstance.open();
});
