let input = document.querySelector("#txtTaskName");
let button = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const list = document.querySelector(".list");
const taskList = document.querySelector("#task-list");

function add() {
  taskList.innerHTML += `<li style="margin-left:20px">${input.value}<button class="btn2" style="margin-left:65rem; "><i class="fas fa-times"></i></button></li>`;
  event.preventDefault();
  let btn2s = document.querySelectorAll(".btn2");
  btn2s.forEach((btn) => btn.addEventListener("click", removeItem));
}

button.addEventListener("click", add);
list.appendChild(taskList);
taskList.style.listStyle = "none";

function removeItem(event) {
  event.currentTarget.parentElement.remove();
}

function deleteAll() {
  taskList.innerHTML = "";
}
btnDeleteAll.addEventListener("click", deleteAll);
