document.addEventListener('DOMContentLoaded', function(){

    //select Dom Elements 
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // function to add task 
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Opps, enter a task");
            return;
        }
        
        //creating a li element
        const li = document.createElement('li');
        li.textContent = taskText;

        //create a button for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        //creating a button to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // append the remove btton to the li
        li.appendChild(removeButton);

        //append the li to the task list
        taskList.appendChild(li);

        //clear the input value 
        taskInput.value = "";
    }

    // Function to load tasks from local storage and display them


    //Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    //addEventListner to the task for the Enter Key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            addTask();
        }
    })

})