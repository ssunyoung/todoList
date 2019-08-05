//Changing HTML
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//Changing CSS
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//functions~
function saveName(text) {
    localStorage.setItem(USER_LS, text);

}
function handleSubmit(event) {
    //submit 눌러도 전송되지 않음
    event.preventDefault();
    //input.placeholder possible
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //user is not existing
        askForName();
    } else {
        //user exists
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();