let form = document.getElementById('signupform');
let firstName = document.getElementById('firstName').value.trim(); 
let lastName = document.getElementById('lastname').value.trim();
let email = document.getElementById('email2').value.trim();
let password = document.getElementById('password1').value.trim();
let confirmation = document.getElementById('password2').value.trim();
let errorElement = document.getElementById('error2').value.trim();
let isValid = true;
let x = document.querySelectorAll('.error'); // make sure you have the 'error' class

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    x.forEach(span => span.textContent = ``);

    // First name validation
    if (firstName === ``) {
        document.getElementById('firstNameError').textContent = `First name is required.`;
        isValid = false;
    }

    // Last name validation
    if (lastName === ``) {
        document.getElementById('lastNameError').textContent = `Last name is required.`;
        isValid = false;
    }

    // Email validation
    if (email === ``) {
        document.getElementById('emailError').textContent = `Email is required.`;
        isValid = false;
    } else if (!email.match(emailRegex)) {
        document.getElementById('emailError').textContent = `Invalid Email Format.`;
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = `Password must be at least 8 characters long.`;
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = `Password must contain at least one lowercase letter and one digit.`;
        isValid = false;
    }

    // Confirmation password validation
    if (confirmation === ``) {
        document.getElementById('confirmPasswordError').textContent = `Please confirm your password.`;
        isValid = false;
    } else if (password !== confirmation) {
        document.getElementById('confirmPasswordError').textContent = `Passwords don't match.`;
        isValid = false;
    }

    // Submit the form if all fields are valid
    if (isValid) {
        alert('Details submitted successfully!');
    }
});
