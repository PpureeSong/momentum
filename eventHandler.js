//event handler
// function handleResize() {
//     console.log("I have been resized");
// }

function handleResize(event) {
    console.log(event);
}

window.addEventListener("resize", handleResize);


function handleClict(event) {
    console.log(event);
    if(title.style.color ==="white") {
        title.style.color="red";
    } else {
        title.style.color="white";
    }
    
}

title.addEventListener("click", handleClict);

const age = prompt("How old are you");
console.log(age);

if(age > 18) {
    console.log("you can drink")
} else {
    console.log("you cant")
}

