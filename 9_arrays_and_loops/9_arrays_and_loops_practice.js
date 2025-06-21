// MAIN 3 STEP PROCESS OF CREATING WEBPAGES WITH JS
// 1. Save the data in a data structure
// 2. Generate the HTML
// 3. Make the webpage interactive

// Creating empty array to store tasks
toDo=[];

function addTask(){
  const task= document.querySelector('.js-add-task').value;
  toDo.push(task);
  console.log(toDo);
  document.querySelector('.js-add-task').value= "";
}

function deleteTask(i){
  toDo.splice(i, 1);
  console.log(toDo);
}

function displayTasks(){
  let taskString="<h3>Tasks:</h3>";
  for (let i=0; i<toDo.length; i++) {
    taskString+= '<div style="padding-top: 20px"> <span style="padding-right: 15px; ">' + toDo[i] + 
      `</span> <span> <button class="js-delete-button delete-button" onclick=" deleteTask(${i}); displayTasks();"> Delete </button>
      </span>` +'<br>';
  }
  document.querySelector('.js-display-tasks').innerHTML= taskString;

}
