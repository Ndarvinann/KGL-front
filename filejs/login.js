
let email = document.getElementById(`Email1`)
let password = document.getElementById(`Password1`)
let form = document.getElementById(`form`)
let errorElement = document.getElementById(`error`)

//catch errors before submission
form.addEventListener(`submit`, (e) =>{
    let messages =[ ]; //stores all the alert messages.
    if(email.value===`` || email.value===null){ //empty email fields
        messages.push(`Email is required`)
    }
    if(password. value.length< 8){
        messages.push(`password must be longer than 8 characters`)
    }
    if (password.value ===`password`){
        messages.push(`Password cannot be password`)
    }
    if (password.value === `qwertyuiop` || password.value ===`123456789` || password.value===`qazxcft`){
        messages.push(`Please use a stronger password`)
    }
    if(messages.length >0){ // if any errors above are detected
        e.preventDefault() // dont submit this form.
        errorElement.innerText =messages.join(" , " ); // display them joined together, separated by a comma.
    }
    else{
        errorElement.innerText = ""; // submit and clear the display area for new information. 
    }
    
});
// thiught about querryselector, but the html has all required id's.