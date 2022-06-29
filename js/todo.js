const toDoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const todoValue = toDoForm.querySelector('input');
let todoArray = [];
const TODO_KEY = 'todo';

function deleteTodo(event) {
     const li = event.target.parentElement;
     li.remove();
     todoArray = todoArray.filter((item) => String(item.id) !== li.id);
     saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todoArray));
}

function paintTodo(value){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = "X";
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    li.id = value.id;
    span.innerText = value.text;
    console.log(value);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault(); 
    const newTodo = todoValue.value;
    todoValue.value = '';
    const todoObj = {id:Date.now(), text:newTodo};
    paintTodo(todoObj);
    todoArray.push(todoObj);
    saveTodo();
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const savedTodoList = localStorage.getItem(TODO_KEY);
if(savedTodoList){
    const todo = JSON.parse(savedTodoList);
    todoArray = todo;
    todo.forEach(element => {
        paintTodo(element);
    });
}