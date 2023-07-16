const formEl = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type = "email"]');
const passwordEl = document.querySelector('input[type = "password"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const email = emailEl.value;
  const password = passwordEl.value;
  // const resetEl = document.querySelector('email, password')

  if (!email || !password) {
    alert('Please enter all form fields');
    return;
  } else {
    const { email, password } = evt.currentTarget.elements;

    const data = { email: email.value, password: password.value };
    formEl.reset();
    console.log(data);
  }
}
