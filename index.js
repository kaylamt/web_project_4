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

function togglePopupEdit() {
  popupEdit.classList.toggle("popup_opened");
  if (popupEdit.classList.contains("popup_opened")) {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  }

  function closePopupWithEscape(evt) {
    const openedPopupElement = document.querySelector(".popup_opened");
    if (evt.key === "Escape" && openedPopupElement) {
      openedPopupElement.classList.toggle("popup_opened");
    }
  }

  function closePopup(e) {
    const openedPopupElement = document.querySelector(".popup_opened");
    if (e.target === openedPopupElement) {
      openedPopupElement.classList.toggle("popup_opened");
    }
  }
  document.addEventListener("click", closePopup);

  document.addEventListener("keydown", closePopupWithEscape);

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
    createNewCard(data.name, data.link);
  });

  function deleteCard() {
    this.closest(".card").remove()
  }

  function toggleLikeButton() {
    this.classList.toggle("card__like-button_clicked");
  }

  function togglePopupAdd() {
    popupAdd.classList.toggle("popup_opened");
  }

  addButton.addEventListener("click", togglePopupAdd);
  closeButtonAdd.addEventListener("click", togglePopupAdd);

  function submitValueAdd(e) {
    e.preventDefault();

    createNewCard(inputTitle.value, inputLink.value);
    togglePopupAdd();
  }

  formAdd.addEventListener("submit", submitValueAdd);

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

    cardImage.addEventListener("click", () => {

      const imagePopup = popupImage.querySelector(".popup__image");
      const popupImageTitle = popupImage.querySelector(".popup__image-title");

      imagePopup.src = link;
      popupImageTitle.textContent = name;

      togglePopupImage();
    });

    cards.prepend(cardElement);

  }

  // function togglePopup() {
  //   this.classList.toggle("popup_opened");
  //   if (popupEdit.classList.contains("popup_opened")) {
  //     inputName.value = profileName.textContent;
  //     inputDescription.value = profileDescription.textContent;
  //   }
  // }

  console.log("hello");


