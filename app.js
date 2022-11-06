// Input codes
const todoColumn = document.querySelector(".todo-box")
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



const draggableBox = document.querySelectorAll(".task-card")
for(let i = 0; i < draggableBox.length; i++){
    // It doesnt work and I dont know why :(
    // draggableBox.id = "draggable-box-" + i;
    console.log(draggableBox[i]);
    draggableBox[i].addEventListener("dragstart", (e) => {
        console.log(e);
        e.dataTransfer.setData("text/plain", e.target.id)
    })
    
}