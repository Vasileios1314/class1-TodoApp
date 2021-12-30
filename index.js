// selectors
const input = document.querySelector(".c-input");
const addBtn = document.querySelector(".c-input-btn");
const ul = document.querySelector(".todoUl");
const clear = document.querySelector(".clearBtn");

// event listeners
addBtn.addEventListener('click', addTodo);
ul.addEventListener('click', deleteCheck);


// functions
  function addTodo(){
    // todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create list
    const newTodo = document.createElement('li')
    newTodo.innerHTML = input.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
     // check btn
     const checkBtn = document.createElement('button')
     checkBtn.innerHTML = '☑️'
     checkBtn.classList.add("check-btn")
     todoDiv.appendChild(checkBtn) 
    // dlt btn
    const completedBtn = document.createElement('button')
    completedBtn.innerHTML = '❌'
    completedBtn.classList.add("complete-btn")
    todoDiv.appendChild(completedBtn)
   
    // append to list
    ul.appendChild(todoDiv)
    // clear input
    input.value = "";
  }

  function deleteCheck(event){
    console.log(event.target)
    const item = event.target
    // dlt
    if(item.classList[0] === 'complete-btn'){
      const todo = item.parentElement
      todo.remove()
    }
    // check
    if(item.classList[0] === 'check-btn'){
      const todo = item.parentElement
      todo.classList.toggle('checked')
    }
  }

  
  