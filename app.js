// *********************
// Dom Variables
// *********************


const todoColumn = document.querySelector(".todo-box")
const doingColumn = document.querySelector(".doing-box")
const doneColumn = document.querySelector(".done-box")
const newTask = document.querySelector("#input");
const boxes = document.querySelectorAll(".box")
const draggableBoxes = document.querySelectorAll(".task-card")
let draggableBoxesLength = draggableBoxes.length;


// let todos = {status: "todo" , value: []}
// let doing = {status: "doing" , value: []}
// let done = {status: "done" , value: []}


// Set local storage for tasks
// localStorage.setItem("todos", todos);
// localStorage.setItem("doing", doing);
// localStorage.setItem("done", done);


let todosData = JSON.parse(localStorage.getItem('todos'))
    for (let i = 0; i < todosData.length; i++) {
        console.log("yey");
        createTaskElement(todosData.value, `${todos.status}-card`)
    }


// *********************
// INPUT CODES
// *********************


function createTaskElement(value, statusClass){
    let element = document.createElement("div")
    element.setAttribute("draggable", "true")
    element.setAttribute("id", `draggable-box-${draggableBoxesLength}`)
    element.classList.add("task-card", statusClass)
    element.innerText = value
    todoColumn.appendChild(element)
    draggableBoxesLength += draggableBoxesLength + 1
}

function clearInput(){
    return newTask.value = ""
}
function addTask(task){
    todos.value.push(task)
    localStorage.setItem("todos", JSON.stringify(todos))
    createTaskElement(task, "todo-card")

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
    const id = e.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id)
    e.target.appendChild(dragged)
    // add class based on where we drop card
    if(e.target.className.includes("todo-box")){
        dragged.classList = "";
        dragged.classList.add("task-card" ,"todo-card")
    } else if(e.target.className.includes("doing-box")){
        dragged.classList = "";
        dragged.classList.add("task-card" ,"doing-card")

    }
    else if(e.target.className.includes("done-box")){
        dragged.classList = "";
        dragged.classList.add("task-card" ,"done-card")

    }
}



