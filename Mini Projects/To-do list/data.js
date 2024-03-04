function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");

    if (todoInput.value !== "") {
        var li = document.createElement("li");
        var span = document.createElement("span");

        li.textContent = todoInput.value;
        span.textContent = "❌";

        span.onclick = function() {
            li.remove();
        };

        li.appendChild(span);
        todoList.appendChild(li);
        todoInput.value = "";
    } else {
        alert("Please enter a todo!");
    }
}