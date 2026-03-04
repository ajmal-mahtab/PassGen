PassBase
PassBase is a lightweight, secure, and responsive password generator built with HTML, CSS, and vanilla JavaScript. It helps users create cryptographically strong passwords directly in their browser.

Features
Secure Generation: Uses crypto.getRandomValues() for cryptographically strong random numbers.

Fully Responsive: Adapts seamlessly to mobile, tablet, and desktop screens.

Customizable: Control password length and include/exclude lowercase, uppercase, numbers, and symbols.

One-Click Copy: Easily copy the generated password to your clipboard.

Preview
How to use
Clone this repository to your local machine.

Open index.html in any modern web browser.

Select your desired complexity settings.

Click Generate Password.

Click Copy to save the password to your clipboard.

Technical Details
Language: Vanilla JavaScript (ES6+)

Styling: CSS3 with Flexbox for layout

Security: Implements Uint32Array for better entropy compared to standard Math.random().

Project Structure
Plaintext
/
├── assets/         # Contains icons/images
├── css/
│   └── style.css   # Main styles and media queries
├── js/
│   └── script.js   # Generation logic and event listeners
└── index.html      # Main application structure
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for new features or improvements.