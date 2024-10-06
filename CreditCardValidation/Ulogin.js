// Example login form validation
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter both email and password");
    e.preventDefault();
  }
});
