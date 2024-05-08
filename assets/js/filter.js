document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('a');

    const storedFilter = localStorage.getItem('taskFilter');
    if (storedFilter) {
        console.log('Stored Filter:', storedFilter);
        filterTasks(storedFilter);
    }

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const status = this.textContent.toLowerCase().replace(' ', '-');
            console.log('Clicked Filter:', status);
            const currentFilter = localStorage.getItem('taskFilter');

            if (currentFilter === status) {
                console.log('Resetting Filter');
                localStorage.removeItem('taskFilter');
                filterTasks('all');
            } else {
                localStorage.setItem('taskFilter', status);
                filterTasks(status);
            }
        });
    });

    function filterTasks(status) {
        console.log('Applying Filter:', status);
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => {
            if (status === 'all' || task.classList.contains(status)) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }
});
