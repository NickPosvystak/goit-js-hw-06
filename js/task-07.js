const inputEl = document.querySelector("#font-size-control");
const valueSpan = document.querySelector("#text");

inputEl.addEventListener("input", changeSize);

function changeSize() {
  valueSpan.style.fontSize = `${inputEl.value}px`;
}
