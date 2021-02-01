const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";


function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);

    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }

    //toggle 로 위의 로직을 간단하게 표한할 수 있다.
    //해당 클래스가 있는지 체크해서 있으면 add, 아니면 remove 해준다.
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
