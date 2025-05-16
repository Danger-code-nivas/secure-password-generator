const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordDisplay = document.getElementById("passwordDisplay");

function updateLength() {
  lengthValue.textContent = lengthSlider.value;
}

function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+{}[]<>?.,~";

  let allChars = "";
  if (includeUppercase) allChars += upperChars;
  if (includeLowercase) allChars += lowerChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === "") {
    passwordDisplay.textContent = "Please select at least one character type.";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  passwordDisplay.textContent = password;
}

function copyToClipboard() {
  const text = passwordDisplay.textContent;
  if (!text || text.includes("Your password will appear") || text.includes("Please select")) {
    alert("Nothing to copy!");
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard!");
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
  if(document.body.classList.contains("light")) {
    // Simple light theme toggle for demonstration
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#222";
    document.querySelector('.container').style.background = "rgba(255 255 255 / 0.85)";
    document.querySelector('.container').style.border = "1px solid rgba(0 0 0 / 0.1)";
  } else {
    // Reset to dark theme variables
    document.body.style.background = "";
    document.body.style.color = "";
    document.querySelector('.container').style.background = "";
    document.querySelector('.container').style.border = "";
  }
}

// Initialize length display on load
updateLength();
