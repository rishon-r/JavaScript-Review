// Creating empty array to store tasks
toDo=[];

function addTask(){
  const task= document.querySelector('.js-add-task').value;
  toDo.push(task);
  console.log(toDo);
  document.querySelector('.js-add-task').value= "";
}

function displayTasks(){
  let taskString="<h3>Tasks:</h3>";
  for (let i=0; i<toDo.length; i++) {
    taskString+=toDo[i]+'<br>';
  }
  document.querySelector('.js-display-tasks').innerHTML= taskString;

}