//Validate conditions
const validates = {
  required(value) {
    if (!value) {
      return "Вы пропустили это поле"
    }
    return "";
  },
  minLength(value, number) {
    if (value && value.length < number) {
      return `Минимальное количество символов: 2. Длина текста сейчас ${number - 1} символ`
    }
    return "";
  },
  maxLength(value, number) {
    if (value && value.length > number) {
      return `Максимальное количество символов: ${number} . Длина текста сейчас ${value.length} символов`
    }
    return "";
  },
  URL(value) {
    const str = "http"
    if (new RegExp(str).test(value)) {
      return ""
    }
    return "Введите адрес сайта";
  }
}
//Entering inputs massive
//Edit form
const editValidate = [{
  name: "name",
  check: [
    {
      name: "required",
      function: validates.required
    },
    {
      name: "minLength",
      function: validates.minLength,
      val: 2
    },
    {
      name: "maxLength",
      function: validates.maxLength,
      val: 40
    }
  ]
},
{
  name: "description",
  check: [
    {
      name: "required",
      function: validates.required
    },
    {
      name: "minLength",
      function: validates.minLength,
      val: 2
    },
    {
      name: "maxLength",
      function: validates.maxLength,
      val: 200
    }
  ]
}];
//Add Place form
const placeValidate = [{
  name: "place",
  check: [
    {
      name: "required",
      function: validates.required
    },
    {
      name: "minLength",
      function: validates.minLength,
      val: 2
    },
    {
      name: "maxLength",
      function: validates.maxLength,
      val: 30
    }
  ]
},
{
  name: "image-link",
  check: [
    {
      name: "required",
      function: validates.required
    },
    {
      name: "URL",
      function: validates.URL
    }
  ]
}];

//Has invalide
function hasInvalidInput(value, check) {
  let i = 0;
  let message = "";
  while (i < check.length) {
    if (check[i].function(value, check[i].val)) {
      message = check[i].function(value, check[i].val);
      break;
    }
    i = i + 1;
  }
  return message;
}

//Check invalide
function checkInvalidInputs(settings) {
  const form = document.querySelector(settings.id);
  const errorClass = form.querySelectorAll("." + settings.errorClass);
  const errorClassHidden = form.querySelectorAll("." + settings.errorClassHidden);
  return !!(errorClass.length || errorClassHidden.length);
}
//setEventListeners
function setEventListeners(input, validate, settings) {
  const form = document.querySelector(settings.id);
  const parent = input.closest(settings.parentBlock);
  const messageBlock = parent.querySelector(settings.messageBlock);
  const submitButton = form.querySelector(settings.submitButton);
  input.addEventListener("input", (evt) => {
    const hasInvalid = hasInvalidInput(evt.target.value, validate.check);
    if (hasInvalid) {
      parent.classList.add(settings.errorClass);
      input.classList.add(settings.errorClass);
      messageBlock.textContent = hasInvalid;
    } else {
      parent.classList.remove(settings.errorClass);
      parent.classList.remove(settings.errorClassHidden);
      input.classList.remove(settings.errorClass);
      input.classList.remove(settings.errorClassHidden);
      messageBlock.textContent = hasInvalid;
    }
    const check = checkInvalidInputs(settings);
    if (check) {
      submitButton.setAttribute("disabled", "disabled");
    } else {
      submitButton.removeAttribute("disabled");
    }
  });
}

//enableValidation
function enableValidation(settings) {
  const form = document.querySelector(settings.id);
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  const submitButton = form.querySelector(settings.submitButton);
  const inputList = Array.from(form.querySelectorAll("input"));
  inputList.forEach((input) => {
    const name = input.getAttribute("name");
    const inputValidate = settings.validate.find(v => v.name == name);
    //выше вместо map применил find
    const parent = input.closest(settings.parentBlock);
    if (inputValidate) {
      setEventListeners(input, inputValidate, settings);
      const hasInvalid = hasInvalidInput(input.value, inputValidate.check);
      if (hasInvalid) {
        parent.classList.add(settings.errorClassHidden);
        input.classList.add(settings.errorClassHidden);
        submitButton.setAttribute("disabled", "disabled")
      }
    }
  });
}

//enableValidation - entering settings
// Edit form
enableValidation({
  id: "#edit-form",
  validate: editValidate,
  errorClass: "has-error",
  errorClassHidden: "has-error-hidden",
  parentBlock: ".popup__input",
  messageBlock: ".popup__input-error",
  submitButton: ".popup__button"
});

// Add Place form
enableValidation({
  id: "#place-form",
  validate: placeValidate,
  errorClass: "has-error",
  errorClassHidden: "has-error-hidden",
  parentBlock: ".popup__input",
  messageBlock: ".popup__input-error",
  submitButton: ".popup__button"
});


