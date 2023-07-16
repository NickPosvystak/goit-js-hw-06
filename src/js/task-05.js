const nameEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

nameEl.addEventListener("input", onInput);

function onInput() {
  if (nameEl.value === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = nameEl.value;
  }
}
