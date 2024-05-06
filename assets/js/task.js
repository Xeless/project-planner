const addTaskButton = document.getElementById('addTaskButton');
const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName('close')[0];

addTaskButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});