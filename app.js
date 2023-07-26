const form = document.getElementById("form").value;
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const cpassword = document.getElementById("cpassword").value;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
});

function validateinputs(){
    const username = username.trim();
    const email = email.trim();
    const password = password.trim();
    const cpassword = document.trim();
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.document.getElementByClassName("error");
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.document.getElementByClassName("error");
    errorElement.innerText = message;
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

if(username === ''){
    setError(username,'Username is required');
} 
else{
    setSuccess(username);
}

if(email === ''){
    setError(email,'Email is required');
} 
else{
    setSuccess(email);
}

// https://www.freecodecamp.org/news/learn-javascript-form-validation-by-making-a-form/