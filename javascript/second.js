var button = document.querySelector('button');
var todoList = document.querySelector(".todo-list");


button.onclick = create;


function create(e){
    e.preventDefault();
    var newDiv = document.createElement('div')
    newDiv.classList.add("todo");
    var newli = document.createElement("li")
    newli.classList.add("list-item")

    newli.innerHTML = todoInput.value;
    newDiv.appendChild(newli)
}