function addPositiveNumbers(num1, num2) {
  let result = "";
  let carry = 0;

  num1 = num1.padStart(Math.max(num1.length, num2.length), "0");
  num2 = num2.padStart(Math.max(num1.length, num2.length), "0");

  for (let i = num1.length - 1; i >= 0; i--) {
    const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    result = (sum % 10).toString() + result;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();

  const result = addPositiveNumbers(num1, num2);
  document.getElementById("result").innerText = `Result: ${result}`;
});
