// Example credit card form validation using Stripe
const creditCardForm = document.getElementById("credit-card-form");

creditCardForm.addEventListener("submit", (e) => {
  const cardNumber = document.getElementById("card-number").value;
  const expirationDate = document.getElementById("expiration-date").value;
  const cvv = document.getElementById("cvv").value;

  if (cardNumber === "" || expirationDate === "" || cvv === "") {
    alert("Please enter all credit card fields");
    e.preventDefault();
  } else {
    // Use Stripe to validate credit card
    Stripe.createToken(
      {
        card: {
          number: cardNumber,
          exp_month: expirationDate.split("/")[0],
          exp_year: expirationDate.split("/")[1],
          cvc: cvv,
        },
      },
      (status, response) => {
        if (response.error) {
          alert(response.error.message);
          e.preventDefault();
        }
      }
    );
  }
});
