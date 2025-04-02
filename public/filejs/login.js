document.addEventListener(
  "DOMContentLoaded",
  function () //make sure html is fully loaded and parsed by the browser before loading js.

  {
    //visibility settings

    // Password visibility toggle
    //select the password icon
    const togglePassword = document.getElementById("togglePassword");
    if (togglePassword) {
      //check if toggle.b exists,then add event listener.
      togglePassword.addEventListener(
        "click",
        function () //add click event listener
        {
          //get the password input field
          const passwordInput = document.getElementById("password");
          //get the icon element inside the input feild.
          const icon = this.querySelector("i");
          // is password currently hidden
          if (passwordInput.type === "password") {
            //change it to visible text
            passwordInput.type = "text";
            //replace the eye icon with shut eye icon
            icon.classList.replace("bi-eye", "bi-eye-slash");
            //if the password is visible
          } else {
            //change the text back to dots.
            passwordInput.type = "password";
            //replace the open eye with a shut eye icon
            icon.classList.replace("bi-eye-slash", "bi-eye");
          }
        }
      );
    }

    // Card hover animation
    const card = document.querySelector(".login-card"); //select the entire login card
    if (card) {
      // add a mouseenter event for when the mouse touches the card.
      card.addEventListener("mouseenter", () => {
        //move it down by 5pixels. transform is from the css.
        card.style.transform = "translateY(-5px)";
      });
      //listen for when the mouse leave the card.
      card.addEventListener("mouseleave", () => {
        //push the card back to its original position.
        card.style.transform = "translateY(0)";
      });
    }

    // 2. FORM VALIDATION
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset previous errors
        clearErrors();

        // Validate fields
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
          // Form is valid - proceed with submission
          alert("Form submitted successfully!"); // Replace with actual submission
          // loginForm.submit(); // Uncomment for real form submission
        }
      });
    }

    // Validation functions
    //define email validation func.
    function validateEmail() {
      //get emailinput element by id
      const email = document.getElementById("email");
      //pick the span that has the email error.
      const emailError = document.getElementById("emailError");
      //the pattern for email formart
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //check if email feild is empty(after trimming space)
      if (!email.value.trim()) {
        //if empty, set error message in text.
        emailError.textContent = "Email is required";
        //add bootstrap invalidclass red border.
        email.classList.add("is-invalid");
        //return validation failed.
        return false;
      }
      //does the email match the regex pattern?
      else if (!emailRegex.test(email.value)) {
        //check the regext against the value
        //if its invalid, send an error message.
        emailError.textContent = "Please enter a valid email";
        //the invalid styling from bootstrap
        email.classList.add("is-invalid");
        //return validation failed.
        return false;
      }
      //if the validation passes, remove error styling
      email.classList.remove("is-invalid");
      //and return true.
      return true;
    }
    //define email validation function
    function validatePassword() {
      //get the passw. input by id
      const password = document.getElementById("password");
      //get passw. error span by id.
      const passwordError = document.getElementById("passwordError");

      if (!password.value.trim()) {
        //is passw. empty ater trimming the spaces?
        //set error message
        passwordError.textContent = "Password is required";
        //change the border to red with bootstrap.
        password.classList.add("is-invalid");
        //and return validation didnt pass.
        return false;
      } else if (password.value.length < 8) {
        //how long is the passw.
        //set the passw.error
        passwordError.textContent = "Password must be at least 8 characters";
        //make the input box red.
        password.classList.add("is-invalid");
        //return not valid.
        return false;
      }
      //if the validation passes, remove all error styling
      password.classList.remove("is-invalid");
      //and return true.
      return true;
    }
    // clear the form after a submission
    function clearErrors() {
      //
      //select ALL elements with an error-message
      document.querySelectorAll(".error-message").forEach((el) => {
        el.textContent = ""; //clear the text content of each error element
      }); //select ALL elements with class isInvalid
      document.querySelectorAll(".is-invalid").forEach((el) => {
        //remove is invalid from each element.
        el.classList.remove("is-invalid");
      });
    }
  }
);

//.forEach((el))=>{...} loops through each element in the genearated node list from the queryselector.(el)is the current elemet for each iteration. el is shorthand.
//for the text content of each elemet(el), clear the text content.
//Find all elements with class 'error-message', then for each element found (which we'll call 'el'), set its text content to empty string
