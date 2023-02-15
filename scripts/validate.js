const validates = {
  required(val) {
    if (!val) {
      return "Поле обязательно для заполнения"
    }
    return "";
  },
  minLength(val, number) {
    if (val && val.length < number) {
      return `Введено менее ${number} символов`
    }
    return "";
  },
  maxLength(val, number) {
    if (val && val.length > number) {
      return `Введено более ${number} символов`
    }
    return "";
  }
}

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
      val: 40
    }
  ]
}];

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

function checkInvalidInputs(settings) {
  const form = document.querySelector(settings.id);
  const errorClass = form.querySelectorAll("." + settings.errorClass);
  const errorClassHidden = form.querySelectorAll("." + settings.errorClassHidden);
  return !!(errorClass.length || errorClassHidden.length);
}

function setEventListeners(input, validate, settings) {
  const form = document.querySelector(settings.id);
  const parent = input.closest(settings.parentBlock);
  const messageBlock = parent.querySelector(settings.messageBlock);
  const submitButton = form.querySelector(settings.submitButton);
  input.addEventListener("input", (e) => {
    const hasInvalid = hasInvalidInput(e.target.value, validate.check);
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

function enableValidation(settings) {
  const form = document.querySelector(settings.id);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  const submitButton = form.querySelector(settings.submitButton);
  const inputList = Array.from(form.querySelectorAll("input"));
  inputList.forEach((input) => {
    const name = input.getAttribute("name");
    const inputValidate = settings.validate.find(v => v.name == name);
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

enableValidation({
  id: "#edit-from",
  validate: editValidate,
  errorClass: "has-error",
  errorClassHidden: "has-error-hidden",
  parentBlock: ".popup__input",
  messageBlock: ".popup__input_type_error",
  submitButton: ".popup__button"
});

console.log('asfasf')
