const from = document.getElementById("username");
const from = document.getElementById("email");
const from = document.getElementById("phone");
const from = document.getElementById("message");

from.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Usernamecannot be blank");
  } else {
    setSuccessFor(username);
  }
}

function setErrorFor(input, message) {
  const contactform = input.parentElement; //.form-control
  const small = contactform.querySelector("small");

  small.innerText = message;

  contactform.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
}
