const todoList = document.querySelector('#todo_list');

const todoField = document.querySelector('#todo_field');

const addTodo = document.querySelector('button');

addTodo.addEventListener('click', addNewTodo);

function addNewTodo() {
	
	const newTodo = document.createElement('li');
	
	newTodo.appendChild(document.createTextNode(todoField.value));
	
	todoList.appendChild(newTodo);
	todoField.value = '';
}
