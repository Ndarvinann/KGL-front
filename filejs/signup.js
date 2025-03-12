
let form = document.getElementById(`signupform`);
// validate the form.
form.addEventListener("submit", (e)=>{
    e.preventDefault(); // prevent form submission

    // get the field values

   
    let firstName = document.getElementById(`firstName`).value.trim(); // 
    //trim removes extra spaces.
    let lastName = document.getElementById(`lastname`).value.trim()
    let email = document.getElementById(`email2`).value.trim();
    let password = document.getElementById(`password1`).value.trim();
    let confirmation= document.getElementById(`password2`).value.trim();
    let errorElement = document.getElementById(`error2`).value.trim();
    let isValid = true; // will tell, at the end of the process. if the whole form is valid.
    let x = document.querySelectorAll(`error`); // select all elements in the html with the class error and forms a node list.
    
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // password formart.
    const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

//reset all existing error messages 

x.forEach(span => span.textContent=``); // take all the span elements and sets all the values inside it to empty.

//1st name validation
if (firstName===`` ){
    document.getElementById(`firstNameError`).textContent =`First name is required.`;
    isValid = false;
}
// last name validation.
if(lastName ===``){
    document.getElemantById('lastNameError').textContent = `Last name is required.`
    isValid = false;
}
  // email validation 
if(email ===``){
    document.getElementById(`emailError`).textContent = `Email is required.`;
    isValid = false;
}
else if (!email.match(emailRegex)){
    document.getElementById(`emailError`).textContent = `Invalid Email Formart`;
    isValid = false;
}
//password validation
    
if(password.length< 8) {
    document.getElementById(`passwordError`).textContent = `password must be atleast 8 characters long.`
    isValid = false;
} 
else if (!passwordPattern.test(password)){
document. getElementById(`passwordError`).textContent = `Password must contain at least one lowercase letter and one digit.`
isValid = false;
}
// confirmation validation

if( confirmation ===``){
    document.getElementById(`confirmPasswordError`).textContent = `please confirm your password.`;
}
else if (password !== confirmation){
    document.getElementById(`confirmPasswordError`).textContent=`Passwords dont match.`;
    isValid = false;
}

//submit the form if all fields are valid

if(isValid){
    alert('Details submitted successfully!');
}
});
