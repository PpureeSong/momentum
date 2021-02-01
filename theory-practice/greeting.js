// local storage
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {

    //enter를 누르면 데이터가 다른곳으로 보내지고 리프레시 되는 것을 막는다
    //(event가 root로 올라올라가는 것을 막는다)
    event.preventDefault();
    const currentValue = input.value;
    //작성한 이름을 보여주긴 하지만 저장한 것음 아니다
    //새로고침하면 다시 form이 뜬다
    paintGreeting(currentValue);
    //localStorage에 저장해준다.
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function  init() {
    loadName(); 
}

init();