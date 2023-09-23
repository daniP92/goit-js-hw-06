const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email == "" || password == "") {
    alert("All fields must be filled in!");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}

form.addEventListener("submit", handleSubmit);
