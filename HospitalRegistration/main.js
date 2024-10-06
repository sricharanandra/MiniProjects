const form = document.getElementById("hospital-registration-form");

form.addEventListener("submit", (e) => {
  const patientName = document.getElementById("patient-name").value;
  const dateOfBirth = document.getElementById("date-of-birth").value;
  const contactNumber = document.getElementById("contact-number").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const emergencyContact = document.getElementById("emergency-contact").value;
  const emergencyContactNumber = document.getElementById(
    "emergency-contact-number"
  ).value;

  // Validate patient name
  if (patientName === "") {
    alert("Please enter patient name");
    e.preventDefault();
  }

  // Validate date of birth
  if (dateOfBirth === "") {
    alert("Please enter date of birth");
    e.preventDefault();
  }

  // Validate contact number
  if (contactNumber === "") {
    alert("Please enter contact number");
    e.preventDefault();
  } else if (!/^\d{10}$/.test(contactNumber)) {
    alert("Invalid contact number");
    e.preventDefault();
  }

  // Validate email
  if (email === "") {
    alert("Please enter email");
    e.preventDefault();
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Invalid email");
    e.preventDefault();
  }

  // Validate address
  if (address === "") {
    alert("Please enter address");
    e.preventDefault();
  }

  // Validate emergency contact
  if (emergencyContact === "") {
    alert("Please enter emergency contact");
    e.preventDefault();
  }

  // Validate emergency contact number
  if (emergencyContactNumber === "") {
    alert("Please enter emergency contact number");
    e.preventDefault();
  } else if (!/^\d{10}$/.test(emergencyContactNumber)) {
    alert("Invalid emergency contact number");
    e.preventDefault();
  }
});
