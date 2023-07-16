const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener("blur", onInput);
console.log(inputEl);

function onInput(event) {

  const inputLength = inputEl.value.length;
    const requiredLength = Number(inputEl.dataset.length);
    
  if (inputLength === requiredLength) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
  }
}