/*
Three steps DOM.
1. Targetting
2. Adding Events
3. Modify/Functions
*/

// Step 1: Select DOM Elements
// todo-input
// todo-button (plus button inside the form)
// filter-todo
// todo-list
// querySelector can select <#id, .class-name, or tag name>
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create Event Listeners for elements
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

function addTodo(e){
    // This function is to add a new "todo"
    e.preventDefault();
    //console.log(e);

    // onclick, create div, li, button1, button2
    // 1. create the todo div with a classname "todo"
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // 2. create a new list with a classname "todoItem"
    const newTodo = document.createElement("li");
    newTodo.classList.add("todoItem");

    // 2-B. put the text inside the "todoInput" to the list
    newTodo.innerText = todoInput.value;

    // 2-C. add the list (child) to the div (parent)
    todoDiv.appendChild(newTodo);

    // 3. Create the "complete" button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton);

    // 4. Create the "delete" button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // 5. Add the newly created div to the todoList (parent ul)
    todoList.appendChild(todoDiv);

    // 6. Clear the textbox 
    todoInput.value = "";
}

function deleteOrCompleteTodo(e){
    // This function is to delete or mark the task as "Complete"
    const item = e.target
    //console.log(item);

    if (item.classList[0] === "trash-btn"){
        // get the parent div
        const todo = item.parentElement;
        // first add the animation and make it disappear (opacity = 0)
        todo.classList.add("fall");
        // at the "end of transition (transitionend)", remove the element
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    } 

    // Mark todo as completed
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        // use toggle not add, so it can be undone!
        todo.classList.toggle("completed");
    }

}

function filterTodos(e){
    // This function is to filter todos based on the selection (complition status)
    const todos = todoList.childNodes;
    //console.log(todos);
    console.log(e.target.value); // completed, uncompleted, or all
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"; // hide it
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    })

}






