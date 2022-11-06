// *********************
// INPUT CODES
// *********************
const todoColumn = document.querySelector(".todo-box")
const doingColumn = document.querySelector(".doing-box")
const doneColumn = document.querySelector(".done-box")
const newTask = document.querySelector("#input");


function createTaskElement(value){
    let element = document.createElement("div")
    element.setAttribute("draggable", "true")
    element.classList.add("task-card", "todo-card")
    element.innerText = value
    todoColumn.appendChild(element)
}

function clearInput(){
    return newTask.value = ""
}
function addTask(task){
    createTaskElement(task)
};
newTask.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        addTask(newTask.value)
        clearInput()
    }
    // I couldnt write it in this way (next line), cuz I wanted to run two functions in if statement. any help?
    // e.key == "Enter" ? addTask(newTask.value), clearInput() : ''
})


// *********************
// DRAG AND DROP CODES 
// *********************


const boxes = document.querySelectorAll(".box")
const draggableBoxes = document.querySelectorAll(".task-card")

boxes.forEach(box => {
    box.addEventListener('dragstart', dragStart);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
});

for(let i = 0; i < draggableBoxes.length; i++){
    draggableBoxes[i].id = "draggable-box-" + i
}



function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id)

}

function dragOver(e){
    e.preventDefault()
}

function drop(e){
    e.preventDefault()
    console.log("Drop");
    const id = e.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id)
    e.target.appendChild(dragged)
    // add class based on where we drop card
    if(e.target.className.includes("todo-box")){
        dragged.classList = "";
        dragged.classList.add("task-card" ,"todo-card")
        console.log("class applied");
    } else if(e.target.className.includes("doing-box")){
        dragged.classList = "";
        dragged.classList.add("task-card" ,"doing-card")
        console.log("class applied");

    }
    else if(e.target.className.includes("done-box")){
        dragged.classList = "";
        dragged.classList.add("task-card" ,"done-card")
        console.log("class applied22");

    }
}


