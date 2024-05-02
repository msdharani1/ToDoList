let button = document.getElementById("button");
let todolist = document.getElementById("todolist");
let input = document.getElementById("input");

let todos = [];

window.onload = () => {
    let currentDate = new Date();
    document.getElementById('dayname').innerHTML = currentDate.getDate() + ':';
    document.getElementById('month').innerHTML = currentDate.getMonth() + 1 + ':'; // Adding 1 to match usual month representation
    document.getElementById('year').innerHTML = currentDate.getFullYear();

    document.getElementById('hours').innerHTML = currentDate.getHours() + ':';
    document.getElementById('minutes').innerHTML = currentDate.getMinutes() + ':';
    document.getElementById('sec').innerHTML = currentDate.getSeconds();

    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodo(todo));
}

button.addEventListener('click', () => {
    todos.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todos));
    addTodo(input.value);
    input.value = '';
});

function addTodo(todo) {
    let para = document.createElement('p');
    para.innerHTML = todo;
    todolist.appendChild(para);

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        remove(para); // Pass the reference to the todo element
    });

    para.addEventListener('dblclick', () => {
        todolist.removeChild(para);
        remove(para); // Pass the reference to the todo element
    });
}

function remove(todoElement) { // Accept the reference to the todo element
    let todoText = todoElement.innerHTML;
    let index = todos.indexOf(todoText);
    if (index > -1) {
        todos.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}