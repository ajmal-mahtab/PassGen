# PassBase

PassBase is a lightweight, secure, and responsive password generator built with HTML, CSS, and vanilla JavaScript. It helps users create cryptographically strong passwords directly in their browser.

## Features
* **Secure Generation:** Uses `crypto.getRandomValues()` for cryptographically strong random numbers.
* **Fully Responsive:** Adapts seamlessly to mobile, tablet, and desktop screens using modern CSS Flexbox and media queries.
* **Customizable:** Control password length (8-64 characters) and toggle specific character sets (lowercase, uppercase, numbers, symbols).
* **One-Click Copy:** Easily copy the generated password to your clipboard with visual feedback.

## UI Overview


## How to use
1. Clone this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Use the slider to set your desired password length.
4. Toggle the checkboxes to include or exclude character types.
5. Click **Generate Password**.
6. Click **Copy** to save the password to your clipboard.

## Technical Details
* **Language:** Vanilla JavaScript (ES6+)
* **Styling:** CSS3 with Flexbox for mobile-first responsiveness.
* **Security:** Implements `window.crypto.getRandomValues()` via `Uint32Array` for high-entropy password generation. This is significantly more secure than standard `Math.random()`.

## Project Structure
```text
/
├── assets/         # Contains icons/images
├── css/
│   └── style.css   # Main styles and responsive media queries
├── js/
│   └── script.js   # Generation logic and event listeners
└── index.html      # Main application structure

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for new features, such as adding an entropy meter or password history tracking.