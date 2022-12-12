const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSumit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    painGeeting(username);
}

function painGeeting(username){
    greeting.innerText = `Hello ${saveUsername}`;
    greeting.classList.remove(HIDDEN_CASSNAME);
}

loginForm.addEventListener("submit", onLoginSumit);

const saveUsername = localStorage.getItem("USERNAME_KEY");

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CASSNAME);
    loginForm.addEventListener("submit", onLoginSumit);
}else{
    painGeeting(saveUsername);
}