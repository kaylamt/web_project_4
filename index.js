const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtonEdit = document.querySelector(".popup__close-button_edit-profile");
const closeButtonAdd = document.querySelector(".popup__close-button_add-card");
//like button
const likeButton = document.querySelector(".card__like-button");
//
const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupAdd = document.querySelector(".popup_type_add-card");
const formEdit = document.querySelector(".form_edit");
const formAdd = document.querySelector(".form_add");
const inputName = document.querySelector(".form__input_field_name");
const inputDescription = document.querySelector(".form__input_field_description");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");

function togglePopupEdit() {
  popupEdit.classList.toggle("popup_opened");
  if (popupEdit.classList.contains("popup_opened")) {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  }
}
//like button
function toggleLikeButton() {
  likeButton.classList.toggle("card__like-button_clicked");
}

likeButton.addEventListener("click", toggleLikeButton);
//
editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

function submitValueEdit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglePopupEdit();
}

formEdit.addEventListener("submit", submitValueEdit);

function togglePopupAdd() {
  popupAdd.classList.toggle("popup_opened");
}

addButton.addEventListener("click", togglePopupAdd);
closeButtonAdd.addEventListener("click", togglePopupAdd);

function submitValueAdd(e) {
  e.preventDefault();

  togglePopupAdd();
}

formAdd.addEventListener("submit", submitValueAdd);

// const initialCards = [
//   {
//     name: "Antelope Canyon",
//     link: "images/antelope-canyon.jpg",
//   },
//   {
//     name: "Denali National Park",
//     link: "images/denali-national-park.jpg",
//   },
//   {
//     name: "Grand Prismatic Spring",
//     link: "images/grand-prismatic-spring.jpg",
//   },
//   {
//     name: "Lake McDonald",
//     link: "images/lake-mcdonald.jpg",
//   },
//   {
//     name: "Redwood National Park",
//     link: "images/redwood-national-park.jpg",
//   },
//   {
//     name: "Yosemite Falls",
//     link: "images/yosemite-falls.jpg",
//   },
// ];

// initialCards.forEach(data => {
//   const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");
//   const cardElement = cardTemplate.cloneNode(true);

//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__text");

//   cardTitle.textContent = data.name;
//   // cardImage.style.backgroundImage = `url(${data.link})`;

//   cardImage.src = data.link;
// });
