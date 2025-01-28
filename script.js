document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Oops, enter a task");
            return;
        }

        // Create a new task object
        const task = {
            text: taskText,
            id: Date.now() // Unique identifier based on current timestamp
        };

        // Add the new task to the tasks array
        tasks.push(task);

        // Save the tasks to local storage
        saveTasks();

        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a button to remove the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task functionality
        removeButton.onclick = function () {
            taskList.removeChild(li);

            // Remove the task from the tasks array
            tasks = tasks.filter(t => t.id !== task.id);

            // Save the updated tasks array to local storage
            saveTasks();
        };

        // Append the remove button to the li
        li.appendChild(removeButton);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the input value
        taskInput.value = "";
    }

    // Function to load tasks from local storage and display them
    function loadTasks() {
        tasks.forEach(task => {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = task.text;

            // Create a button to remove the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Remove task functionality
            removeButton.onclick = function () {
                taskList.removeChild(li);

                // Remove the task from the tasks array
                tasks = tasks.filter(t => t.id !== task.id);

                // Save the updated tasks array to local storage
                saveTasks();
            };

            // Append the remove button to the li
            li.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(li);
        });
    }

    // Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the task input for the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            addTask();
        }
    });

    // Load tasks from local storage when the page loads
    loadTasks();
});
