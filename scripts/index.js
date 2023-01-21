// Popup
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_active');

editButton.addEventListener('click', (Event) => {
  Event.preventDefault();
  editPopup.classList.toggle('popup_opened')
});

const closeButton = document.querySelector('.popup__close');

closeButton.addEventListener('click', (Event) => {
  Event.preventDefault();
  editPopup.classList.toggle('popup_opened')
});

// Submit
const formElement = document.querySelector('.popup__card');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_discribe');

function handleFormSubmit(evt) {
  evt.preventDefault();

}
formElement.addEventListener('submit', handleFormSubmit);
