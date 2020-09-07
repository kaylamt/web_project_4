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
const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");


function togglePopupEdit() {
  popupEdit.classList.toggle("popup_opened");
  if (popupEdit.classList.contains("popup_opened")) {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  }
}

editButton.addEventListener("click", togglePopupEdit);

closeButtonEdit.addEventListener("click", togglePopupEdit);

function submitValueEdit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglePopupEdit();
}

formEdit.addEventListener("submit", submitValueEdit);



function togglePopupImage() {
  popupImage.classList.toggle("popup_opened");
}

closeButtonImage.addEventListener("click", togglePopupImage);

function submitValueImage(e) {
  e.preventDefault();

  togglePopupImage();
}

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

const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");
const cards = document.querySelector(".cards");


initialCards.forEach(data => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;

  cardImage.addEventListener("click", () => {

    const imagePopup = popupImage.querySelector(".popup__image");
    const popupImageTitle = popupImage.querySelector(".popup__image-title");

    imagePopup.src = data.link;
    popupImageTitle.src = data.name;

    togglePopupImage();
  });

  cards.prepend(cardElement);

});

//delete card
const cardDeleteButtons = document.querySelectorAll(".card__delete-button");

cardDeleteButtons.forEach(cardDeleteButton => {
  cardDeleteButton.addEventListener("click", deleteCard);
});
function deleteCard() {
  cardTemplate.remove(); //??????
}

// cardDeleteButton.addEventListener("click", () => {
//   //handle card delete click

// });


const likeButtons = document.querySelectorAll(".card__like-button");

likeButtons.forEach(likeButton => {
  likeButton.addEventListener("click", toggleLikeButton);
});

function toggleLikeButton() {
  this.classList.toggle("card__like-button_clicked");
}

function togglePopupAdd() {
  popupAdd.classList.toggle("popup_opened");
  if (popupAdd.classList.contains("popup_opened")) {
    inputTitle.value = cardTitle.textContent;
    inputLink.value = cardImage.textContent;
  }
}

addButton.addEventListener("click", togglePopupAdd);
closeButtonAdd.addEventListener("click", togglePopupAdd);

function submitValueAdd(e) {
  e.preventDefault();
  // cardTitle.textContent = inputTitle.value;
  // cardImage.textContent = inputLink.value;
  //^^this makes the create button not work

  togglePopupAdd();
  addCard();
}

formAdd.addEventListener("submit", submitValueAdd);

function addCard() {
  cards.prepend(cardTemplate);
}





//adding new card--like button doesn't exist ^^ needs new event listener (& delete button)

