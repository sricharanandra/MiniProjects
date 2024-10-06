function capitalize() {
  const input = document.getElementById("input").value;
  const words = input.split(" ");
  const capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  const capitalizedString = capitalizedWords.join(" ");
  document.getElementById("result").textContent = capitalizedString;
}
