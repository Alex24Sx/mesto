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
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__discription');
const formElement = document.querySelector('.popup__card');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_discribe');

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  editPopup.classList.toggle('popup_opened');
}
formElement.addEventListener('submit', handleFormSubmit);
  /*
nameInput.value = "";
jobInput.value = "";
*/
