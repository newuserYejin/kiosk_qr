const showKeyboardButton = document.getElementById('show-keyboard-button');
const inputField = document.getElementById('input-field');

showKeyboardButton.addEventListener('click', () => {
  inputField.focus();
});