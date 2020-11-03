const buttonFeedback = document.querySelector('.button-feedback');
const modalPopup = document.querySelector('.modal');
const buttonClose = modalPopup.querySelector('.close-button');
const feedbackForm = modalPopup.querySelector(".feedback-form");
const userName = modalPopup.querySelector('[name=name]');
const userEmail = modalPopup.querySelector('[name=email]');
const userText = modalPopup.querySelector('[name=text]');

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} 
catch (err) {
  isStorageSupport = false;
}


buttonFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalPopup.classList.add('modal-show');
    
    if (storageName) {
      userName.value = storageName;    
      userEmail.focus();
  } 
   if (storageEmail) {
   userEmail.value = storageEmail;
   userText.focus();
} else {    
    userName.focus();
  }
});

buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('modal-show');
    modalPopup.classList.remove("modal-error");
  });

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", userName.value);
      localStorage.setItem("email", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});