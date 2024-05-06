// Cette function permet de rajoute la task dans la colonne to-do-list
function addTaskToTodoList (date,title,description) {
const taskElement = document.createElement("div")
taskElement.classList.add("bulle-content")
taskElement.innerHTML = 

<h2 class="titre">${title}</h2>
<p class="description">${description}</p>
<p>${date}</p>

document.body.appendChild(taskElement)
}