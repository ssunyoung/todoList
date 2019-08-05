const colockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector(".js-clockTitle");
//. js-clockTitle
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //`(백틱) 과 ${변수}는 문자열과 변수 합칠 때 사용한다.
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
    getTime();
    //setInterval(함수이름, mille secound)
    setInterval(getTime, 1000);
}

init()