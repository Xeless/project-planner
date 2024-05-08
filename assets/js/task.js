const taskForm = document.getElementById("addTaskButton");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskDateInput = document.getElementById("taskDate");
const dateActuelle = new Date().toISOString().split("T")[0]
taskDateInput.min = dateActuelle
const todoList = document.getElementById("test");
let tasks = [];


function calculeDuree() {
    const dateActuelle = new Date();
    const dateChoisie = new Date(taskDateInput.value);

    const difference = dateChoisie.getTime() - dateActuelle.getTime();
    const jours = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return jours;
}

taskForm.addEventListener("click", function(event) {
    event.preventDefault();

    const title = taskTitleInput.value;
    const description = taskDescriptionInput.value;
    const date = taskDateInput.value;
    const joursRestants = calculeDuree();

    const newTask = {
        title: title,
        description: description,
        date: new Date(date),
        joursRestants: joursRestants
    };


    tasks.push(newTask);

    tasks.sort((a, b) => a.date - b.date);


    displayTasks();
});


function displayTasks() {

    todoList.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("bulle-content");
        taskElement.innerHTML = `
            <div class="title-container">
                <h2 class="titre">${task.title}</h2>
                <i class="fa-solid fa-trash" style="color: #b50808;"></i>
            </div>
            <p class="description">${task.description}</p>
            <div class="date-container">
                <p class="date"><i class="fa-regular fa-calendar-days"></i> ${task.date.toDateString().split(' ').slice(1).join(' ')}</p>
                <p class="jours-restants">Jours restants: ${task.joursRestants}</p>
                <div class="icon-date">
                    <i class="fa-solid fa-check" style="color: #63E6BE;"></i>
                    <i class="fa-solid fa-spinner" style="color: #FFD43B;"></i>
                </div>
            </div>`;

        const removeIcon = taskElement.querySelector(".fa-trash");
        removeIcon.addEventListener("click", function() {
            taskElement.remove();

            tasks = tasks.filter(t => t !== task);

        });

        const doneIcon = taskElement.querySelector(".fa-check")
        doneIcon.addEventListener("click", function(){
            const doneChecked = document.getElementById("done-checked")
            doneChecked.appendChild(taskElement)

            doneIcon.style.display = "none"
            progressIcon.style.display = "block"
            tasks = tasks.filter(t => t !== task);
            displayTasks();
        })

        const progressIcon = taskElement.querySelector(".fa-spinner")
        progressIcon.addEventListener("click", function(){
            const progressElement = document.getElementById("progress")
            progressElement.appendChild(taskElement)

            doneIcon.style.display = "block"
            progressIcon.style.display = "none"
            tasks = tasks.filter(t => t !== task);
            displayTasks();

        })

        // Ajouter l'élément de tâche à la liste
        todoList.appendChild(taskElement);
    });
}