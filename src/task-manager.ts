import { tasks, nextTaskId, createSampleTasks } from "./seed.js";

const form = document.getElementsByClassName("task-form")[0] as HTMLFormElement;
const input2 = document.getElementById("task-input") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const exportButton = document.getElementById("exporttask") as HTMLButtonElement;



function renderTasks() : void {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks();
        });


        const span = document.createElement("span");
        span.textContent = task.title;
        li.append(checkbox, span);
       
        taskList.appendChild(li);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input2.value.trim();

    if (title) {
        tasks.push({ id: nextTaskId(), title, completed: false });
        input2.value = "";
        input2.focus();
        renderTasks();
    }
});

exportButton.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks, null, 2));
    const downloadAnchorNode = document.createElement('a'); 
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "tasks.json");
    downloadAnchorNode.click();
});

createSampleTasks();
renderTasks();

console.log( tasks);