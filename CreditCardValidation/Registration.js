// Example registration form validation
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (e) => {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    e.preventDefault();
  }
});
