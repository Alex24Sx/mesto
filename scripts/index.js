const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_active');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__discription');
const formElement = document.querySelector('.popup__card');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_discribe');
const closeButton = document.querySelector('.popup__close');

// Popup
function add(evt) {
  editPopup.classList.add('popup_opened');
}
editButton.addEventListener('click', add);

function remove(evt) {
  editPopup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', remove);

// Submit

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  editPopup.classList.toggle('.popup__close');
}
formElement.addEventListener('submit', handleFormSubmit);


/*
nameInput.value = "";
jobInput.value = "";
*/
