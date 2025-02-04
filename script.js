document.getElementById("add-task-btn").addEventListener("click", function() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; // Clear the input field after adding the task
    }
});

function addTask(taskText) {
    let taskList = document.getElementById("task-list");

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Add a "Complete" button to each task
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete-btn");
    completeButton.addEventListener("click", function() {
        li.classList.toggle("completed"); // Toggle the completed class
    });

    li.appendChild(completeButton);
    taskList.appendChild(li);
}
