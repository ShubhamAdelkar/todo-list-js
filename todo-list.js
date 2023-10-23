const todoList = [{
    name: 'make dinner', dueDate: '2023-10-18'
}, {
    name: 'wash dishes', dueDate: '2023-10-18'
}];

renderTodo();
function renderTodo() {
    let todoListHTML = '';
    for (i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `<div class = "name">${name}</div> <div class = "date_"> ${dueDate} </div>
         <button class = "delete-button"  onclick = "todoList.splice(${i}, 1);  renderTodo();">Delete</button>`;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    const dueDateElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    inputElement.value = '';
    renderTodo();
}
