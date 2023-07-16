const decEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterEl = 0;

decEl.addEventListener('click', offClick);
incrementEl.addEventListener('click', onClick);

function offClick(evt) {
  counterEl -= 1;
  valueEl.textContent = counterEl;
}

function onClick(evt) {
  counterEl += 1;
  valueEl.textContent = counterEl;
}
