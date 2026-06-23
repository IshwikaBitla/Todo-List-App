let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



function addTask(){


let taskName =
document.getElementById("taskInput").value;


if(taskName==""){

alert("Enter task");

return;

}



let task={


name:taskName,

fromDate:
document.getElementById("fromDate").value,


toDate:
document.getElementById("toDate").value,


fromTime:
document.getElementById("fromTime").value,


toTime:
document.getElementById("toTime").value,


important:
document.getElementById("important").checked,


urgent:
document.getElementById("urgent").checked,


completed:false



};


tasks.push(task);


saveTasks();


displayTasks();



}



document
.getElementById("taskInput")
.addEventListener("keypress",
function(event){

if(event.key==="Enter"){

addTask();

}

});





function displayTasks(){


let list =
document.getElementById("taskList");


list.innerHTML="";



tasks.forEach((task,index)=>{


let li=document.createElement("li");



li.innerHTML=


task.name+

"<br>Date: "+
task.fromDate+
" to "+
task.toDate+


"<br>Time: "+
task.fromTime+
" to "+
task.toTime+


"<br>"+

(task.important?"⭐ Important ":"")+

(task.urgent?"🚨 Urgent ":"")+



"<br><button onclick='completeTask("+index+")'>Done</button>"+

"<button onclick='deleteTask("+index+")'>Delete</button>";




if(task.completed)

li.classList.add("completed");



if(task.urgent)

li.classList.add("urgent");


if(task.important)

li.classList.add("important");



list.appendChild(li);



checkAlarm(task);



});



document.getElementById("count").innerHTML=

"Total Tasks: "+tasks.length;


}




function completeTask(index){

tasks[index].completed=true;

saveTasks();

displayTasks();

}




function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}




function clearTasks(){

tasks=[];

saveTasks();

displayTasks();

}




function saveTasks(){

localStorage.setItem(

"tasks",

JSON.stringify(tasks)

);

}





function checkAlarm(task){


let now=new Date();


let taskTime=
new Date(

task.fromDate+" "+task.fromTime

);



if(taskTime-now < 60000 && taskTime-now>0){


alert(

"Reminder 🔔 : "+task.name

);


}


}




displayTasks();