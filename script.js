const newToDoInput = document.querySelector(".form-input");
const toDoAddBtn = document.querySelector(".form-btn-add");
const toDoList = document.querySelector(".todo-list");

toDoAddBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", tamamlaSil);

function addToDo() {
  //  alert("btn clicked");
  /* <div class="list-item-container">
  <li class="list-item">
      Watch JS Video and Practise 
  </li>
  <button class="todo-btn todo-btn-done"><i class="fa fa-check" aria-hidden="true"></i></button>
  <button class="todo-btn todo-btn-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
</div> */

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("list-item-container");

  const toDoLi = document.createElement("li");
  toDoLi.classList.add("list-item");

  toDoLi.innerText = newToDoInput.value;

  toDoDiv.appendChild(toDoLi);

  const btnDone = document.createElement("button");
  // btnDone.classList.add("todo-btn");
  // btnDone.classList.add("todo-btn-done");
  btnDone.className = "todo-btn todo-btn-done";
  btnDone.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  toDoDiv.appendChild(btnDone);

  const btnDelete = document.createElement("button");
  btnDelete.className = "todo-btn todo-btn-delete";
  btnDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  toDoDiv.appendChild(btnDelete);
  newToDoInput.value = "";
  
  toDoList.appendChild(toDoDiv);

}

function tamamlaSil(e) {
  const clickedElement = e.target;
  if (clickedElement.classList.contains("todo-btn-done")) {
    clickedElement.parentElement.classList.toggle("todo-isdone");
  }
  if (clickedElement.classList.contains("todo-btn-delete")) {
    clickedElement.parentElement.classList.add("deleted");
  }
}
