const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const USER_NAME = 'userName';


function onLoginSubmit(event)
{
    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    paintingGreetings()
}

loginForm.addEventListener("submit", onLoginSubmit);
 
const savedUserName = localStorage.getItem(USER_NAME);
if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
}
else{
   paintingGreetings(savedUserName)
}


function paintingGreetings(){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${savedUserName}`;
}




