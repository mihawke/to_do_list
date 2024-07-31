import { renderProjects } from './modules/getProject';
import { renderTodos } from './modules/getTodos';
import './styles.css';

const Projects = [
    {
        title: "Project1",
        todos: [
            {
                title: "todo1",
                description: "todo1-description",
                dueDate: "todo1-dueDate",
                priority: "todo1-priority",
            },
            {
                title: "todo2",
                description: "todo2-description",
                dueDate: "todo2-dueDate",
                priority: "todo2-priority",
            },
            {
                title: "todo3",
                description: "todo3-description",
                dueDate: "todo3-dueDate",
                priority: "todo3-priority",
            }
        ]
    },
    {
        title: "Project2",
        todos: [
            {
                title: "todo1",
                description: "todo1-description",
                dueDate: "todo1-dueDate",
                priority: "todo1-priority",
            },
            {
                title: "todo2",
                description: "todo2-description",
                dueDate: "todo2-dueDate",
                priority: "todo2-priority",
            },
            {
                title: "todo3",
                description: "todo3-description",
                dueDate: "todo3-dueDate",
                priority: "todo3-priority",
            }
        ]
    }
];

// Initialize the main container and content areas
function initializeUI() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const navDiv = document.createElement("nav");
    navDiv.setAttribute("id", "nav-container");
    navDiv.classList.add("nav-container");

    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.classList.add("content");

    container.appendChild(navDiv);
    container.appendChild(content);

    document.body.appendChild(container);
}

// Render initial content on DOMContentLoaded
function renderInitialContent() {
    try {
        renderProjects(Projects);
        if (Projects.length > 0) {
            renderTodos(Projects[0].title, Projects[0].todos);
        } else {
            console.warn("No projects available to render.");
        }
    } catch (error) {
        console.error("Error rendering projects or todos:", error);
    }
}

// Initialize and render content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initializeUI();
    renderInitialContent();
});
