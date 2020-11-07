import "./pages/index.css";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import Api from "./components/Api.js";
import Popup from "./components/Popup.js";

import { popupEdit, editCardForm, addCardForm, editButton, addButton, closeButtonEdit, inputName, inputDescription, avatarButton } from "./utils/constants.js";

const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible"
}


const popupEditInstance = new PopupWithForm(submitValueEdit, ".popup_type_edit-profile");

const popupImageInstance = new PopupWithImage(".popup__image-title", ".popup__image", ".popup_type_image");

const editFormValidator = new FormValidator(defaultConfig, editCardForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

const popupAvatarInstance = new PopupWithForm(submitAvatarEdit, ".popup_type_edit-avatar");

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-4",
  headers: {
    authorization: "6a003bb7-5a61-4ed9-a0ac-4e04a1ae5c34",
    "Content-Type": "application/json"
  }
});

// const deletePopupInstance = new Popup(".popup_type_delete-card");
const cardInstances = [];
const userInfoInstance = new UserInfo(
  {
    avatarSelector: ".profile__avatar",
    nameSelector: ".profile__info-name",
    descriptionSelector: ".profile__info-description"
  });

api.getAppInfo().then(res => {
  const [userInfo, cards] = res;
  userInfoInstance.setUserAvatar(userInfo.avatar);
  userInfoInstance.setUserInfo(userInfo.name, userInfo.about);
  const sectionInstance = new Section({ items: cards, renderer: renderCard }, ".cards")
  sectionInstance.renderer();

  function submitValueAdd(e, { title, link }) {
    e.preventDefault();
    api.addCard({ name: title, link: link }).then(cards => {
      const element = renderCard(cards);
      sectionInstance.addItem(element);
      popupAddInstance.toggle();
    }).catch(error => console.log(error));
  }

  const popupAddInstance = new PopupWithForm(submitValueAdd, ".popup_type_add-card")

  addButton.addEventListener("click", () => {
    popupAddInstance.open();
  });

  function renderCard(data) {
    const cardInstance = new Card(
      {
        currentUserId: userInfo._id,
        data: data,
        handleCardClick: (name, link) => {
          popupImageInstance.open(name, link)
        },
        handleDeleteClick: (cardId) => {
          return api.removeCard(cardId)
        },
        handleLikeClick: (cardId, like) => {
          return api.changeLikeCardStatus(cardId, like)
        }
      },
      ".card-template"
    );
    cardInstances.push(cardInstance);
    return cardInstance.createNewCardElement();
  }
  const deleteCardConfirmButton = document.querySelector(".form__save-button-delete");
  deleteCardConfirmButton.addEventListener("click", onDeleteCardConfirm);

  const deletePopupInstance = new Popup(".popup_type_delete-card");

  function onDeleteCardConfirm(e) {
    const card = cardInstances.find(card => card._id === e.currentTarget.dataset.cardId);
    card.deleteCard();
    deletePopupInstance.close();
  }
}).catch(error => console.log(error));

function togglePopupEdit() {
  popupEditInstance.toggle();
  if (popupEdit.classList.contains("popup_opened")) {
    const { name, description } = userInfoInstance.getUserInfo();
    inputName.value = name;
    inputDescription.value = description;
  }
}

function submitAvatarEdit(e, { avatar }) {
  e.preventDefault();
  api.setUserAvatar(avatar).then(res => {
    userInfoInstance.setUserAvatar(res.avatar);
    popupAvatarInstance.close()
  }).catch(error => console.log(error));
}

function submitValueEdit(e, { name, description }) {
  e.preventDefault();
  api.setUserInfo({ name: name, about: description }).then(res => {
    userInfoInstance.setUserInfo(res.name, res.about);
    popupEditInstance.close();
  }).catch(error => console.log(error));
}

editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

avatarButton.addEventListener("click", () => {
  popupAvatarInstance.toggle();
});