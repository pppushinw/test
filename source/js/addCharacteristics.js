const list = document.querySelector('.characteristics-list');
const input = document.querySelector('.characteristics-value');
const form = document.querySelector('.characteristics-input');

form.onsubmit = function (evt) {
  evt.preventDefault();
  const newCharacteristics = document.createElement('li');
  newCharacteristics.textContent = input.value;
  list.append(newCharacteristics);
};