// Example profile form validation
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please enter both name and email");
    e.preventDefault();
  }
});
