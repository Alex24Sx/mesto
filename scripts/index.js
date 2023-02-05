const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__discription');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_discribe');
const closeButton = document.querySelector('.popup__close-icon');

const editPopupAdd = document.querySelector('.popup_place_add');
const linkInput = document.querySelector('.popup__input-text_type_image-link');
const placeInput = document.querySelector('.popup__input-text_type_place');
const addButton = document.querySelector('.profile__add-button');
const closeaddButton = document.querySelector('.popup__close-icon-add');

// Popup
function add() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
editButton.addEventListener('click', add);

function remove() {
  editPopup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', remove);
// Popup-add
/*
function add() {
  const formaddElement = document.querySelector('.popup__form_place_add');
  editPopupAdd.classList.add('popup_opened');
}
addButton.addEventListener('click', add);

function remove() {
  editPopupAdd.classList.remove('popup_opened');
}
closeaddButton.addEventListener('click', remove);*/


// Submit

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  remove();
}
formElement.addEventListener('submit', handleFormSubmit);

// Create cards

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
/*initialCards.forEach(function (element) {
  initialCardsElement.querySelector('.elements__card-name').textContent = element.name;
  return initialCards
})*/

const cardContainer = document.querySelector('.elements');
const cardTemplate = document
  .querySelector('.elements__element-template')
  .content
  .querySelector('.elements__element');


function createCard(text) {
  const card = cardTemplate.cloneNode(true);
  const cardText = card.querySelector('.elements__card-name');
  cardText.textContent = initialCards.name;
  return card;
}
function renderCards() {
  initialCards.forEach(item => {
    const cardHtml = createCard(item);
    cardContainer.append(cardHtml);
  });
}
renderCards()

