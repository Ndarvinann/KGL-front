// the variables.
let email = document.getElementById(`email`)
let password = document.getElementById(`password`)
let form = document.getElementById('loginForm')
let errorSpans = document.querySelectorAll(` .error-message`) //.. we are looking for a class. creates a nodelist.
let isValid = true;

form.addEventListener('submit',function(e){
    e.preventDefault(); // prevent auto submission

    //clear previous error messages
    errorSpans.forEach(span=>span.textContent =' '); // iterates over each element, preparing fresh validation results.

    //email validation
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(email===''){
    document.getElementById('emailError').textContent ='Email is required.';
    isValid = false;
}
else if (!emailRegex.test(email)){
    document.getElementById('emailError').textContent = 'Invavid Email Formart.';
    isValid = false; 
}
//password validation
const passwordPattern = /^(?=.*[a-z])(?=.*\d).{8,}$/; // atleast 8 characters, one lowercase, one digit
if(password===''){
    document.getElementById(`passwordError`).textContent = `Password is required.`;
    isValid = false;
}
else if (!passwordPattern.test(password)){
    document.getElementById(`passwordError`).textContent = `Password must contain atleast one lowercase letter and one digit.`
    isValid = false;
}
// submit the form if all fields are valid
if(isValid){
    alert(`Details Submitted Successfully`);

    //add the redirection  logic based on user role here. 
}
})
