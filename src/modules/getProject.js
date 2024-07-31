import { renderTodos } from "./getTodos";

class Project {
    constructor(title, todos = []) {
        this.title = title;
        this.todos = todos;
    }
}


export function renderProjects(projects) {
    const container = document.getElementById("nav-container");
    container.innerHTML = '';

    const addProjectBtn = document.createElement("button");
    addProjectBtn.textContent = "Create New Project";
    addProjectBtn.addEventListener("click", () => {
        openProjectDialog(projects);
    });
    container.appendChild(addProjectBtn);

    const projectContainerDiv = document.createElement("div");
    projectContainerDiv.classList.add("project-container");

    projects.forEach((item,index) => {
        const projectCard = document.createElement("button");
        projectCard.classList.add("project-card");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = item.title;

        projectCard.addEventListener("click", () => {
            renderTodos(item.title, item.todos);
        });

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "Del";
        deleteProjectBtn.addEventListener("click", () => {
            deleteProject(projects,index);
        });

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(deleteProjectBtn);
        projectContainerDiv.appendChild(projectCard);
    });
    container.appendChild(projectContainerDiv);
}

function openProjectDialog(projectList) {
    const container = document.getElementById("container");

    const dialog = document.createElement("dialog");
    container.appendChild(dialog);
    dialog.showModal();

    const form = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "project-title");
    titleLabel.textContent = "Project Title";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "project-title");
    titleInput.setAttribute("name", "project-title");
    titleInput.setAttribute("type", "text");

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Add Project";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(submitBtn);
    dialog.appendChild(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const project = new Project(titleInput.value);
        projectList.push(project);
        dialog.close();
        renderProjects(projectList); // Update the project list display
    });
}

function deleteProject(list,index) {
    list.splice(index,1)
    renderProjects(list)
}