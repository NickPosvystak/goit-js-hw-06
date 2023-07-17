function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const newBox = document.querySelector('button[data-create]');
const delBox = document.querySelector('button[data-destroy]');

newBox.addEventListener('click', () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }
  boxesEl.append(fragment);
}

delBox.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  boxesEl.innerHTML = '';
}