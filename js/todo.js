const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter : array의 모든 아이템을 통해 함수를 실행하고, true인 아이템들만 가지고 새로운 array를 만든다
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== li.id;
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    //자바스크립트는 로컬스토리지에 있는 모든 데이터를 string으로 저장
    //그래서 object가 string이 되도록 만들어야 한다 > JSON.stringify
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId =  Date.now();

    delBtn.innerHTML = "❌"
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        id: newId,
        text: text,
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDoList = localStorage.getItem(TODOS_LS);
    if(loadedToDoList !== null) {
        //JSON.parse : string을 object로 변환
        const parsedToDos = JSON.parse(loadedToDoList);

        //forEach : list에 있는 모든 item들을 위한 함수를 실행
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();