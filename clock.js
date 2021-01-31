const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const data = new Date();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();

    clockTitle.innerHTML= `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

//setInterval(실행할 함수, 실행할 시간 간격(millisecond 기준))
function sayHi() {
    console.log('say hi')

}
// setInterval(sayHi, 3000);

function init() {
    getTime();
    setInterval(getTime, 1000)
}

init();