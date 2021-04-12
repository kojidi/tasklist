"use strict";

// Get UI Elements

const formTask = document.querySelector("#form"),
  inputTask = document.querySelector("#task"),
  submitBtn = document.querySelector("#task-btn"),
  tasksList = document.querySelector(".collection"),
  clearBtn = document.querySelector(".clear-btn"),
  filter = document.querySelector("#filter"),
  overlay = document.querySelector(".overlay"),
  alertCard = document.querySelector(".alert-card"),
  blankCard = document.querySelector(".blank-card"),
  alertText = document.querySelector(".alert-text"),
  alertHeading = document.querySelector(".alert-heading"),
  yesBtn = document.querySelector(".yes"),
  cancelBtn = document.querySelector(".cancel"),
  okBtn = document.querySelector(".ok");

// Event Listeners
formTask.addEventListener("submit", getInput);
tasksList.addEventListener("click", cleartask);
clearBtn.addEventListener("click", clearTasks);
filter.addEventListener("keyup", filtering);

// Functions

function getInput(e) {
  if (inputTask.value === "") {
    overlay.classList.remove("hidden");
    blankCard.classList.remove("hidden");

    okBtn.addEventListener("click", function () {
      overlay.classList.add("hidden");
      blankCard.classList.add("hidden");
    });
    e.preventDefault();
  } else {
    // console.log(inputTask.value);
    // Creat li element
    const li = document.createElement("li");
    // add class
    li.className = "list";
    // creat p
    const p = document.createElement("p");
    // add class to p
    p.className = "list-p";
    // add append child in p
    p.appendChild(document.createTextNode(inputTask.value));
    // appent p in li
    li.appendChild(p);
    // append li in ul
    tasksList.appendChild(li);
    // creat icon
    const icon = document.createElement("i");
    // add class to icon
    icon.className = "fa fa-remove";
    // append icon in the li
    li.appendChild(icon);
    // clear input
    inputTask.value = "";
    // permition false

    e.preventDefault();
  }
}

// Clear Task
function cleartask(e) {
  // if (e.target.classList.contains("fa-remove")) {
  // if (
  //   confirm(
  //     `Do you want to delete "${e.target.parentElement.firstChild.textContent}"`
  //   )
  // ) {
  //   e.target.parentElement.remove();
  // }

  if (e.target.classList.contains("fa-remove")) {
    overlay.classList.remove("hidden");
    alertCard.classList.remove("hidden");
    alertText.textContent = `Do you want to delete "${e.target.parentElement.firstChild.textContent}"`;
    yesBtn.addEventListener("click", function () {
      overlay.classList.add("hidden");
      alertCard.classList.add("hidden");
      e.target.parentElement.remove();
    });
  }

  cancelBtn.addEventListener("click", function () {
    overlay.classList.add("hidden");
    alertCard.classList.add("hidden");
  });
}

// Clear All Tasks
function clearTasks(e) {
  //   if (confirm("Are you sure you want to delete all the Tasks?")) {
  //     while (tasksList.firstChild != null) {
  //       tasksList.removeChild(tasksList.firstChild);
  //     }
  //   }

  if (e.target.classList.contains("clear-btn")) {
    overlay.classList.remove("hidden");
    alertCard.classList.remove("hidden");
    alertText.textContent = "Are you sure you want to delete all the Tasks?";
    yesBtn.addEventListener("click", function () {
      overlay.classList.add("hidden");
      alertCard.classList.add("hidden");
      while (tasksList.firstChild != null) {
        tasksList.removeChild(tasksList.firstChild);
      }
    });
  }

  cancelBtn.addEventListener("click", function () {
    overlay.classList.add("hidden");
    alertCard.classList.add("hidden");
  });
  e.preventDefault();
}

// Filtering
function filtering(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".list").forEach(function (task) {
    const item = task.firstChild.textContent.toLowerCase();
    if (item.indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
