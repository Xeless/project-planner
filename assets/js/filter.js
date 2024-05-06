document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('nav a');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const status = this.textContent.toLowerCase().replace(' ', '-');
            filterTasks(status);
        });
    });

    function filterTasks(status) {
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => {
            if (task.classList){}
            if (task.classList.contains(status) || status === 'all') {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }
});