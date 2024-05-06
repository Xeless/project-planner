const taskForm = document.getElementById("addTaskButton")
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskDateInput = document.getElementById("taskDate");
const todoList = document.getElementById("test");




taskForm.addEventListener("click", function(event) {
    event.preventDefault();

    const title = taskTitleInput.value;
    const description = taskDescriptionInput.value;
    const date = taskDateInput.value;

    addTaskToTodoList(date, title, description);
});








function addTaskToTodoList(date, title, description) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("bulle-content");
    taskElement.innerHTML = `
        <h2 class="titre">${title}</h2>
        <p class="description">${description}</p>
        <div class="date-container">
        <p class="date">  <i class="fa-regular fa-calendar-days"></i>  ${date}</p>
        <i class="fa-solid fa-check"></i>
        </div>
    `;

    const checkDoneIcon = taskElement.querySelector(".fa-check"); // Sélection de l'icône check-done
    checkDoneIcon.addEventListener("click", function() {

const doneChecked = document.getElementById("done-checked")
doneChecked.appendChild(taskElement)

checkDoneIcon.remove()
    });



    todoList.appendChild(taskElement);

}
