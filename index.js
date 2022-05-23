var input = document.getElementById("taskInput");
var toDoList = document.getElementById("tasksCont");

const tasklist = [
  "ExampleTask",
  "Read Javascript",
  "Another Task",
];
// tasklist.splice(1, 1, "changed text");

//initial array
showToDo();
console.log(tasklist);

document.getElementById("submitItem").addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value != "") {
    tasklist.push(input.value);
    input.value = "";
    console.log(tasklist);
    showToDo();
  } else {
    prompt("input field can't be empty");
    return;
  }
});

function showToDo() {
  toDoList.innerHTML = "";
  tasklist.forEach((task, i) => {
    //
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    taskCard.classList.add("shadowCard");
    taskCard.classList.add("col");

    const taskContentCont = document.createElement("form");
    taskContentCont.classList.add("content");
    taskContentCont.setAttribute("id", "taskContent");

    taskCard.appendChild(taskContentCont);

    const taskItemText = document.createElement("textarea");
    taskItemText.classList.add("taskItemText");
    taskItemText.setAttribute("form", "taskContent");
    taskItemText.type = "text";
    taskItemText.value = task;
    taskItemText.setAttribute("readonly", "readonly");
    taskItemText.setAttribute("id", "taskItemText");

    taskContentCont.appendChild(taskItemText);

    //creating footer for task card
    const taskFooter = document.createElement("div");
    taskFooter.classList.add("taskFooter");

    //checkbox container and checkbox
    const taskCheckCont = document.createElement("div");
    taskCheckCont.classList.add("taskCheckCont");
    taskCheckCont.innerHTML =
      " <input id='taskCheck' class='form-check-input' onClick='handleCheck(" +
      i +
      ")' type='checkbox'/>";

    //actions container
    const taskActions = document.createElement("div");
    taskActions.classList.add("taskActions");

    //edit and delete buttons
    const editTaskBtn = document.createElement("button");
    editTaskBtn.classList.add("editTaskBtn");
    editTaskBtn.innerText = "Edit";

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("deleteTaskBtn");
    deleteTaskBtn.innerHTML =
      "<span onclick='deleteTask(" +
      i +
      ")'><i class='fa-solid fa-trash'></i></span>";

    //appending conts to footer
    taskFooter.appendChild(taskCheckCont);
    taskFooter.appendChild(taskActions);

    //appending buttons to actions
    taskActions.appendChild(editTaskBtn);
    taskActions.appendChild(deleteTaskBtn);

    taskCard.appendChild(taskFooter);

    toDoList.appendChild(taskCard);

    input.value = "";

    // toDoList.innerHTML +=
    // "<li ><input id='taskItemText' value="+task+" readonly/><a onClick='editItem(" + i + ")'>edit</a></li>";

    editTaskBtn.addEventListener("click", (e) => {
      if (editTaskBtn.innerText.toLowerCase() == "edit") {
        editTaskBtn.innerText = "Save";
        taskItemText.removeAttribute("readonly");
        taskItemText.focus();
      } else {
        editTaskBtn.innerText = "Edit";
        taskItemText.setAttribute("readonly", "readonly");
      }
    });
  });
  
}
function deleteTask(i) {
  tasklist.splice(i, 1);
  showToDo();
  console.log(tasklist);
}
function handleCheck(i) {
  tasklist.forEach((task,i)=>{
    if (document.getElementById("taskCheck").checked == true) {
      document.getElementById("taskItemText").style.textDecoration =
        "line-through";
    } else {
      document.getElementById("taskItemText").style.textDecoration = "none";
    }
  })
   
  
}

function showModal() {
  var formModal = document.getElementById("formModal");
var formModalWrapper=document.getElementById('modalWrapper')
var formCont=document.getElementById('inputFormCont')
  //modals
  formModal.style.display='flex'
  formModalWrapper.style.display='block'
  formCont.style.display='block'
}

function hideModal() {
  var formModal = document.getElementById("formModal");

  //modals
  formModal.style.display='none'
}