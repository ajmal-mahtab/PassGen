const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthVal = document.getElementById("length-val");
const generatorBtn = document.getElementById("generator");
const copyBtn = document.getElementById("copy-btn");

// Character sets
const charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Update length display
lengthInput.addEventListener("input", () => {
    lengthVal.textContent = lengthInput.value;
});

// Secure Password Generator Function
function generatePassword() {
    let allowedChars = "";
    if (document.getElementById("lowercase").checked) allowedChars += charSets.lowercase;
    if (document.getElementById("uppercase").checked) allowedChars += charSets.uppercase;
    if (document.getElementById("numbers").checked) allowedChars += charSets.numbers;
    if (document.getElementById("symbols").checked) allowedChars += charSets.symbols;

    if (allowedChars === "") {
        alert("Please select at least one character type!");
        return;
    }

    const length = parseInt(lengthInput.value);
    const password = new Uint32Array(length);
    crypto.getRandomValues(password);

    let finalPassword = "";
    for (let i = 0; i < length; i++) {
        finalPassword += allowedChars[password[i] % allowedChars.length];
    }

    passwordInput.value = finalPassword;
}

// Copy to Clipboard
copyBtn.addEventListener("click", () => {
    if (!passwordInput.value) return;
    navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied to clipboard!");
});

generatorBtn.addEventListener("click", generatePassword);