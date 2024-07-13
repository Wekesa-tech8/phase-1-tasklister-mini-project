document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  function handleFormSubmit(event) {
    event.preventDefault(); 
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      taskList.appendChild(taskItem);
      document.getElementById("new-task-description").value = "";
    }
  }

  taskForm.addEventListener("submit", handleFormSubmit);
});