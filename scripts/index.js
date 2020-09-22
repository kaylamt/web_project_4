const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtonEdit = document.querySelector(".popup__close-button_edit-profile");
const closeButtonAdd = document.querySelector(".popup__close-button_add-card");
const closeButtonImage = document.querySelector(".popup__close-button_image")
const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupAdd = document.querySelector(".popup_type_add-card");
const popupImage = document.querySelector(".popup_type_image");
const formEdit = document.querySelector(".form_edit");
const formAdd = document.querySelector(".form_add");
const inputName = document.querySelector(".form__input_field_name");
const inputDescription = document.querySelector(".form__input_field_description");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const inputTitle = document.querySelector(".form__input_field_title");
const inputLink = document.querySelector(".form__input_field_link");
const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");
const cards = document.querySelector(".cards");


function togglePopupEdit() {
  togglePopup(popupEdit);
  if (popupEdit.classList.contains("popup_opened")) {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  }
}

function closePopupWithEscape(e) {
  const openedPopupElement = document.querySelector(".popup_opened");
  if (e.key === "Escape" && openedPopupElement) {
    togglePopup(openedPopupElement);
  }
}

function closePopupWithClick(e) {
  const openedPopupElement = document.querySelector(".popup_opened");
  if (e.target === openedPopupElement) {
    togglePopup(openedPopupElement);
  }
}

function submitValueEdit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglePopupEdit();
}

function deleteCard() {
  this.closest(".card").remove()
}

function toggleLikeButton() {
  this.classList.toggle("card__like-button_clicked");
}

function submitValueAdd(e) {
  e.preventDefault();

  const newCard = createNewCard(inputTitle.value, inputLink.value);
  cards.prepend(newCard);
  togglePopup(popupAdd);
}

function createNewCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", toggleLikeButton);

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", deleteCard);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  const imagePopup = popupImage.querySelector(".popup__image");
  const popupImageTitle = popupImage.querySelector(".popup__image-title");

  cardImage.addEventListener("click", () => {

    imagePopup.src = link;
    popupImageTitle.textContent = name;

    togglePopup(popupImage);
  });

  return cardElement;

}

function togglePopup(popupWindow) {
  popupWindow.classList.toggle("popup_opened");
  if (popupWindow.classList.contains("popup_opened")) {
    document.addEventListener("click", closePopupWithClick);
    document.addEventListener("keydown", closePopupWithEscape);
  } else {
    document.removeEventListener("click", closePopupWithClick);
    document.removeEventListener("keydown", closePopupWithEscape);
  }
}

editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

formAdd.addEventListener("submit", submitValueAdd);

addButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});

closeButtonAdd.addEventListener("click", () => {
  togglePopup(popupAdd);
});

formEdit.addEventListener("submit", submitValueEdit);

closeButtonImage.addEventListener("click", () => {
  togglePopup(popupImage);
});

const initialCards = [
  {
    name: "Antelope Canyon",
    link: "images/antelope-canyon.jpg",
  },
  {
    name: "Denali National Park",
    link: "images/denali-national-park.jpg",
  },
  {
    name: "Grand Prismatic Spring",
    link: "images/grand-prismatic-spring.jpg",
  },
  {
    name: "Lake McDonald",
    link: "images/lake-mcdonald.jpg",
  },
  {
    name: "Redwood National Park",
    link: "images/redwood-national-park.jpg",
  },
  {
    name: "Yosemite Falls",
    link: "images/yosemite-falls.jpg",
  },
];

initialCards.forEach(data => {
  const newCard = createNewCard(data.name, data.link);
  cards.prepend(newCard);
});