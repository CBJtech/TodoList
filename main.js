  // Get DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return alert('Please enter a field');

      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskItem.addEventListener("click", () => {
          taskItem.classList.toggle("done");
      });

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
          const newText = prompt("Edit the task:", taskText);
          if (newText !== null && newText.trim() !== "") {
              taskItem.textContent = newText;
          }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
          taskItem.remove();
      });

      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskInput.value = "";
  }

  // Event listeners
  addTaskButton.addEventListener("click", addTask);
  taskInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
          addTask();
      }
  });