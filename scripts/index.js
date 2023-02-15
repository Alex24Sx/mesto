// Consts
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__discription');
// First popup const
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_place_profile');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_discribe');
const closeButton = document.querySelector('.popup__close-icon');
// Second popup const
const editPopupadd = document.querySelector('.popup_place_add');
const addButton = document.querySelector('.profile__add-button');
const closeaddButton = document.querySelector('.popup__close-icon-add');
const formaddElement = document.querySelector('.popup__form_place_add');
// Third popup const
const editPopupimage = document.querySelector('.popup_place_image');
const popupImage = document.querySelector('.popup__image');
const popupDes = document.querySelector('.popup__description');
const closeimgButton = document.querySelector('.popup__close-icon-image');
// Popups
// open--common------------
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// close--common--------------
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
// open--private--------------
function popupEdit() {
  openPopup(editPopup);
  //editPopup.classList.add('popup_opened');
}
nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;

editButton.addEventListener('click', popupEdit);

function popupAdd() {
  openPopup(editPopupadd);
  //editPopupadd.classList.add('popup_opened');
}
addButton.addEventListener('click', popupAdd);

function popupOpenimage(item) {
  popupImage.setAttribute('src', item.link);
  popupImage.setAttribute('alt', item.name);
  popupDes.textContent = item.name;
  openPopup(editPopupimage);
  //editPopupimage.classList.add('popup_opened');
}

// close---private-----------------


function removeEdit() {
  closePopup(editPopup);
  //editPopup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', removeEdit);

function removeAdd() {
  closePopup(editPopupadd);
  //editPopupadd.classList.remove('popup_opened');
}
closeaddButton.addEventListener('click', removeAdd);

function removeImage() {
  closePopup(editPopupimage);
  //editPopupimage.classList.remove('popup_opened');
}
closeimgButton.addEventListener('click', removeImage);

// Submit for profile

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  removeEdit();
}
formElement.addEventListener('submit', handleFormSubmit);
///Add cards elements
// First six cards massive
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
// local consts----------
const cardContainer = document.querySelector('.elements');
const cardTemplate = document
  .querySelector('.elements__element-template')
  .content
  .querySelector('.elements__element');

// Create cards

function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardText = card.querySelector('.elements__card-name');
  const cardImg = card.querySelector('.elements__item');
  const cardRemove = card.querySelector('.elements__delete-icon');
  const cardLike = card.querySelector('.elements__icon');
  cardImg.setAttribute('src', item.link);
  cardImg.setAttribute('alt', item.name);
  cardText.textContent = item.name;
  cardRemove.addEventListener('click', () => {
    card.remove();
  });
  cardImg.addEventListener('click', () => {
    popupOpenimage(item);
  });
  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('elements__icon_active');
  });
  return card;
}
function renderCards() {
  initialCards.forEach(item => {
    const cardHtml = createCard(item);
    cardContainer.append(cardHtml);
  });
}
renderCards()

// Add cards
const linkInput = document.querySelector('.popup__input-text_type_image-link');
const placeInput = document.querySelector('.popup__input-text_type_place');

function submitAddform(evt) {
  evt.preventDefault();
  const card = {
    name: placeInput.value,
    link: linkInput.value
  };
  const newCard = createCard(card);
  cardContainer.prepend(newCard);
  // Clean inputs
  placeInput.value = '';
  linkInput.value = '';
  removeAdd();
};
formaddElement.addEventListener('submit', submitAddform);




