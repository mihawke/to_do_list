class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function renderTodos(projectTitle, todos) {
    const container = document.querySelector(".content");
    container.innerHTML = '';

    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Create New Todo";
    addTodoBtn.addEventListener("click", () => {
        openTodoDialog(projectTitle, todos);
    });

    const projectTitleDiv = document.createElement("h1");
    projectTitleDiv.textContent = projectTitle;

    const todosContainerDiv = document.createElement("div");
    todosContainerDiv.classList.add("todos-container");

    container.appendChild(projectTitleDiv)
    container.appendChild(addTodoBtn);
    container.appendChild(todosContainerDiv)


    todos.forEach((item,index) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoTitle = document.createElement("p");
        todoTitle.textContent = item.title;

        const todoDescription = document.createElement("p");
        todoDescription.textContent = item.description;

        const todoDueDate = document.createElement("p");
        todoDueDate.textContent = item.dueDate;

        const todoPriority = document.createElement("p");
        todoPriority.textContent = item.priority;


        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.textContent = "Delete";
        deleteTodoBtn.addEventListener("click", () => {
            deleteTodo(projectTitle,todos,index);
        });


        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoDescription);
        todoItem.appendChild(todoDueDate);
        todoItem.appendChild(todoPriority);
        todoItem.appendChild(deleteTodoBtn);

        todosContainerDiv.appendChild(todoItem);
    });
}

function openTodoDialog(projectTitle, todos) {
    const container = document.getElementById("container");
    container.innerHTML = '';

    const projectTitleDiv = document.createElement("h1");
    projectTitleDiv.textContent = projectTitle;
    container.appendChild(projectTitleDiv)

    const dialog = document.createElement("dialog");
    container.appendChild(dialog);
    dialog.showModal();

    const form = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "todo-title");
    titleLabel.textContent = "Todo Title";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "todo-title");
    titleInput.setAttribute("name", "todo-title");
    titleInput.setAttribute("type", "text");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "todo-description");
    descriptionLabel.textContent = "Todo Description";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("id", "todo-description");
    descriptionInput.setAttribute("name", "todo-description");
    descriptionInput.setAttribute("type", "text");

    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "todo-dueDate");
    dueDateLabel.textContent = "Todo Due Date";
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("id", "todo-dueDate");
    dueDateInput.setAttribute("name", "todo-dueDate");
    dueDateInput.setAttribute("type", "text");

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "todo-priority");
    priorityLabel.textContent = "Todo Priority";
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("id", "todo-priority");
    priorityInput.setAttribute("name", "todo-priority");
    priorityInput.setAttribute("type", "text");

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Add Todo";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);

    form.appendChild(submitBtn);
    dialog.appendChild(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const todo = new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
        todos.push(todo);
        dialog.close();
        renderTodos(projectTitle,todos); // Update the project list display
    });
}


function deleteTodo(projectTitle,list,index) {
    list.splice(index,1)
    renderTodos(projectTitle,list)
}