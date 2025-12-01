// Get the elements from the HTML
const input = document.getElementById("todoInput");
const button = document.getElementById("addButton");
const list = document.getElementById("todoList");

// Function to add a new task
function addTask() {
  // Get the text from the input field
  const taskText = input.value;

  // Only add if the input isn't empty
  if (taskText !== "") {
    // 1. Create a new <li> element
    const newTask = document.createElement("li");
    
    // 2. Set its text content
    newTask.textContent = taskText;
    
    // 3. (Bonus) Add a click event to mark as done/remove
    newTask.addEventListener("click", function() {
      list.removeChild(newTask);
    });

    // 4. Add the new <li> to the <ul> list
    list.appendChild(newTask);

    // 5. Clear the input field
    input.value = "";
  }
}

// Make the button listen for clicks
button.addEventListener("click", addTask);

// (Bonus) Also add a task when pressing "Enter" in the input field
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});