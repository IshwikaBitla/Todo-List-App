let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function displayTasks(){

let list=document.getElementById("taskList");

list.innerHTML="";


tasks.forEach((task,index)=>{


let li=document.createElement("li");


li.innerHTML=

task.name+

"<button onclick='completeTask("+index+")'>Done</button>"+

"<button onclick='editTask("+index+")'>Edit</button>"+

"<button onclick='deleteTask("+index+")'>Delete</button>";


if(task.completed){

li.classList.add("completed");

}


list.appendChild(li);


});


document.getElementById("count").innerHTML=
"Total Tasks: "+tasks.length;


saveTasks();

}



function addTask(){

let input=document.getElementById("taskInput");


if(input.value==""){

alert("Enter task");

return;

}


tasks.push({

name:input.value,
completed:false

});


input.value="";


displayTasks();

}



function completeTask(index){

tasks[index].completed=true;

displayTasks();

}



function editTask(index){

let newTask=prompt(
"Edit task",
tasks[index].name
);


if(newTask){

tasks[index].name=newTask;

}


displayTasks();

}



function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}



function clearTasks(){

tasks=[];

displayTasks();

}



function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}



displayTasks();