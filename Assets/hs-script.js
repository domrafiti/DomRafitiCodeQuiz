var todoInput = document.querySelector("#hi-score-text");
var todoForm = document.querySelector("#hi-score-form");
var todoList = document.querySelector("#hi-score-list");
var todoCountSpan = document.querySelector("#hi-score-count");
var highScoreEl = document.getElementById("hi-score");
var lastHighScore = localStorage.getItem("high score");

var todos = [];
var highScoresLi = [];

highScoreEl.innerHTML = `<p>Your high score for the last game was: ${lastHighScore}</p>`;

// The following function renders items in a todo list as <li> elements
function renderTodos(todoObj) {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i].initials;
    var highScore = todos[i].hiscore;

    var li = document.createElement("li");
    li.textContent = todo + " scored " + highScore + " points ";
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Remove";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // This is a helper function that will render todos to the DOM
  renderTodos();
}


function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}


// Add submit event to form - off Enter
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var lastHighScore = localStorage.getItem("high score");

  var todoText = todoInput.value.trim();
  var todoObj = {
    initials: todoText,
    hiscore: lastHighScore
  };

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoObj);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
  return todoObj;
});


// Add click event to todoList element
todoList.addEventListener("click", function (event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});


// Calls init to retrieve data and render it to the page on load
init()
