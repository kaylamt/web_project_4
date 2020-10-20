const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupAdd = document.querySelector(".popup_type_add-card");
const editCardForm = popupEdit.querySelector(".form_edit");
const addCardForm = popupAdd.querySelector(".form_add");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtonEdit = document.querySelector(".popup__close-button_edit-profile");
const inputName = document.querySelector(".form__input_field_name");
const inputDescription = document.querySelector(".form__input_field_description");

export {
  popupEdit as popupEdit,
  editCardForm as editCardForm,
  addCardForm as addCardForm,
  editButton as editButton,
  addButton as addButton,
  closeButtonEdit as closeButtonEdit,
  inputName as inputName,
  inputDescription as inputDescription
};


