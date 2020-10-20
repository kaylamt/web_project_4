import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import initialCards from "../scripts/initialCards.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";


const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible"
}

const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupAdd = document.querySelector(".popup_type_add-card");

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

const editCardForm = popupEdit.querySelector(".form_edit");
const addCardForm = popupAdd.querySelector(".form_add");

const editFormValidator = new FormValidator(defaultConfig, editCardForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtonEdit = document.querySelector(".popup__close-button_edit-profile");
const closeButtonAdd = document.querySelector(".popup__close-button_add-card");
const closeButtonImage = document.querySelector(".popup__close-button_image")
const popupImage = document.querySelector(".popup_type_image");
const formEdit = document.querySelector(".form_edit");
const formAdd = document.querySelector(".form_add");
const inputName = document.querySelector(".form__input_field_name");
const inputDescription = document.querySelector(".form__input_field_description");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const inputTitle = document.querySelector(".form__input_field_title");
const inputLink = document.querySelector(".form__input_field_link");
export const cards = document.querySelector(".cards");


function togglePopupEdit() {
  popupEditInstance.toggle();
  if (popupEdit.classList.contains("popup_opened")) {
    const { name, description } = userInfoInstance.getUserInfo();
    inputName.value = name;
    inputDescription.value = description;

  }
}

// function closePopupWithEscape(e) {
//   const openedPopupElement = document.querySelector(".popup_opened");
//   if (e.key === "Escape" && openedPopupElement) {
//     togglePopup(openedPopupElement);
//   }
// }

// function closePopupWithClick(e) {
//   const openedPopupElement = document.querySelector(".popup_opened");
//   if (e.target === openedPopupElement) {
//     togglePopup(openedPopupElement);
//   }
// }

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

  // const cardInstance = new Card(
  //   {
  //     data: data,
  //     handleCardClick: (name, link) => {
  //       popupImageInstance.open(name, link)
  //     }
  //   },
  //   ".card-template"
  // );
  // const newCardElement = cardInstance.createNewCardElement();
  // cards.prepend(newCardElement);
  const element = renderCard(data);
  sectionInstance.addItem(element);
  popupAddInstance.toggle();
}

// function togglePopup(popupWindow) {
//   popupWindow.classList.toggle("popup_opened");
//   if (popupWindow.classList.contains("popup_opened")) {
//     document.addEventListener("click", closePopupWithClick);
//     document.addEventListener("keydown", closePopupWithEscape);
//   } else {
//     document.removeEventListener("click", closePopupWithClick);
//     document.removeEventListener("keydown", closePopupWithEscape);
//   }
// }

editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

// formAdd.addEventListener("submit", submitValueAdd);

addButton.addEventListener("click", () => {
  popupAddInstance.open();
});

// closeButtonAdd.addEventListener("click", () => {
//   popupAddInstance.toggle();
// });

// formEdit.addEventListener("submit", submitValueEdit);

// closeButtonImage.addEventListener("click", () => {
//   popupImageInstance.toggle();
// });

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


// initialCards.forEach(data => {
//   const cardInstance = new Card(
//     {
//       data: data,
//       handleCardClick: (name, link) => {
//         popupImageInstance.open(name, link)
//       }
//     },
//     ".card-template"
//   );
//   const newCardElement = cardInstance.createNewCardElement();
//   cards.prepend(newCardElement);
// });
