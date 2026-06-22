function addTask(){

    let input = document.getElementById("taskInput");

    let task = input.value;


    if(task === ""){
        alert("Enter a task");
        return;
    }


    let li = document.createElement("li");


    li.innerHTML = task + 
    " <button onclick='completeTask(this)'>Done</button>" +
    " <button onclick='deleteTask(this)'>Delete</button>";


    document.getElementById("taskList")
    .appendChild(li);


    input.value = "";

}



function completeTask(button){

    let task = button.parentElement;

    task.classList.toggle("completed");

}



function deleteTask(button){

    let task = button.parentElement;

    task.remove();

}