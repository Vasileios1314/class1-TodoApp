const btn = document.querySelector(".btn");

const addBtn = document.querySelector(".c-input-btn");
const allTodos = document.querySelector(".body-todos");

// when i click the btn
addBtn.addEventListener("click", () => {
  const input = document.querySelector(".c-input");
  // error handling in case of empty value
  if (input.value === "") return alert("Your input is empty!");

  const todo = document.createElement("span");
  todo.classList.add("todo");
  todo.innerHTML = `<div class="todo-checkbox">
  <input class="${input.value}" type="checkbox" id="${input.value}" name="${input.value}" />
  <label for="${input.value}">${input.value}</label>
</div>
<div class="todo-bin">
  <svg
    width="15px"
    color="#007bff"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      style="fill: rgb(0, 123, 255)"
      d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
    ></path>
  </svg>
</div>`;

  allTodos.append(todo);
  //   append also to local storage
  //   remove value from input
  input.value = "";

  //   delete a todo
  const bin = todo.querySelector(".todo-bin");
  bin.addEventListener("click", () => {
    todo.remove();
    // remove also from local storage
  });

  //   is checkbox checked?
});

// clear all btn
btn.addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => todo.remove());
});

// To do for next time: Local Storage

// check if local storage exists
// if yes for each items in local storage append it to our todos div
// if not make a local storage

// for each item we add in in our todos we add it also in local storage
// and the same for delete
if (localStorage.getItem("myTodos")) {
  console.log("local storage is there");
} else {
  console.log("local storage is NOT there");
}