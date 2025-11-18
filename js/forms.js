const form = document.querySelector("form");
const firstOutput = document.querySelector(".placeholder");

function handleSubmit(event) {
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  const formData = new FormData(form);

  // 3. vise data
  const email = formData.get("e-mail");
  firstOutput.textContent = email;

  const firstName = formData.get("first_name");
  firstOutput.textContent += " " + firstName;

  const lastName = formData.get("last_name");
  firstOutput.textContent += " " + lastName;

  // 4. evt. nustil formular

  form.reset();
}

form.addEventListener("submit", handleSubmit);


