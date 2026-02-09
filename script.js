const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    message.textContent = "Please enter your name";
    message.style.color = "red";
    return;
  }

  if (!emailPattern.test(emailInput.value)) {
    message.textContent = "Please enter a valid email address";
    message.style.color = "red";
    return;
  }

  message.textContent = "Message sent successfully!";
  message.style.color = "green";

  nameInput.value = "";
  emailInput.value = "";
});