let button = document.getElementById("button");
let todolist = document.getElementById("todolist");
let input = document.getElementById("input");

let todos = [];

window.onload = () => {
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
