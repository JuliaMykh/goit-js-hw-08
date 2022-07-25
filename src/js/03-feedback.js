import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInputForm, 1000));
form.addEventListener('submit', onSubmitForm);

saveTextArea();

const formData = {};
const STORAGE_KEY = 'feedback-message';

function onInputForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function saveTextArea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        email.value = savedMessage.email;
        message.value = savedMessage.message;
    }
};


