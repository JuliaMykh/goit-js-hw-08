import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInputForm, 1000));
form.addEventListener('submit', onSubmitForm);

saveTextArea();

let formData = JSON.parse(localStorage.getItem('feedback-message')) || {};

function onInputForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-message', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-message')));
  e.preventDefault();
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;
  if (email === "" || message === "") {
    alert("Заполните все поля!");
    return
  };
  e.currentTarget.reset();
  localStorage.removeItem('feedback-message');
}
    
function saveTextArea() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-message'));
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
};

