import "./pages/index.css";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import Api from "./components/Api.js";
import Popup from "./components/Popup.js";

import { popupEdit, editCardForm, addCardForm, editButton, addButton, closeButtonEdit, inputName, inputDescription, avatarButton, cardDeleteButton } from "./utils/constants.js";

const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible"
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-4", //link in project description
  headers: {
    authorization: "6a003bb7-5a61-4ed9-a0ac-4e04a1ae5c34", //own token
    "Content-Type": "application/json"
  }
});


api.getCardList().then(res => {
  const sectionInstance = new Section({ items: res, renderer: renderCard }, ".cards")
  sectionInstance.renderer();

  function submitValueAdd(e, { title, link }) {
    e.preventDefault();
    api.addCard({ name: title, link: link }).then(res => {
      const element = renderCard(res);
      const sectionInstance = new Section({ items: res, renderer: renderCard }, ".cards")
      sectionInstance.addItem(element);
      popupAddInstance.toggle();
    })
  }

  const popupAddInstance = new PopupWithForm(submitValueAdd, ".popup_type_add-card")

  addButton.addEventListener("click", () => {
    popupAddInstance.open();
  });

  return sectionInstance

})

const userInfoInstance = new UserInfo(
  {
    nameSelector: ".profile__info-name",
    descriptionSelector: ".profile__info-description"
  });

api.getUserInfo()
  .then(res => {
    userInfoInstance.setUserInfo(res.name, res.about)
  });


const popupEditInstance = new PopupWithForm(submitValueEdit, ".popup_type_edit-profile");

const popupImageInstance = new PopupWithImage(".popup_type_image");

const editFormValidator = new FormValidator(defaultConfig, editCardForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

const popupAvatarInstance = new Popup(".popup_type_edit-avatar");
// const popupDeleteInstance = new Popup(".popup_type_delete-card");

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
  api.setUserInfo({ name: name, about: description }).then(res => {
    userInfoInstance.setUserInfo(res.name, res.about);
    popupEditInstance.close();
  })
}

function renderCard(data) {
  const cardInstance = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        popupImageInstance.open(name, link)
      },
      handleDeleteClick: (cardId) => {
        return api.removeCard(cardId)
      }
    },
    ".card-template"
  );
  return cardInstance.createNewCardElement();
}

editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

function togglePopupAvatar() {
  popupAvatarInstance.toggle();
}

avatarButton.addEventListener("click", togglePopupAvatar);

// function togglePopupDelete() {
//   popupDeleteInstance.toggle();
// }

// cardDeleteButton.addEventListener("click", togglePopupDelete);