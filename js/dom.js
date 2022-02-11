/* *************************************************************
    Style The Page 
************************************************************* */
// Open Form to Add Task
let openBtn = document.querySelector(".add-sec .sec-top .btn.open-btn");
let addForm = document.querySelector(".add-sec .form.add-form");

openBtn.addEventListener("click", () => {
    addFormToggle();
});

function addFormToggle(){
    addForm.classList.toggle("open-form");
    openBtn.classList.toggle("close");
}

// Open & Close Form to Edit Task
let secTop = document.querySelector(".add-sec .sec-top");
let closeEditBtn = document.querySelector(".add-sec .sec-top .btn.close-btn");
let editForm = document.querySelector(".add-sec .form.edit-form");
let tasksList = document.querySelector(".view-sec .tasks-list");

tasksList.addEventListener("click", (e) => {
    if (e.target.dataset.id == "edit"){
        openEditForm();
    }
});

function openEditForm(){
    // Close Add Form If It Open
    if (addForm.classList.contains("open-form")){
        addForm.classList.remove("open-form");
        openBtn.classList.remove("close");
    }

    // Open Edit Form
    editForm.classList.add("open-form");
    secTop.classList.add("edit-opened");

    // Scroll To Top Page To Edit Data
    window.scrollTo({top: 0});
}

closeEditBtn.addEventListener("click", () => {
    closeEditForm();
});

function closeEditForm () {
    editForm.classList.remove("open-form")
    secTop.classList.remove("edit-opened");
}


// Start Functions
arrayOfTasks = window.localStorage.getItem("ToDoList") || [];

// No Item Div
let noItemDiv = document.querySelector('.view-sec .no-item');
let tasksDiv = document.querySelector('.view-sec .tasks-div');

function checkDivs(arrayOfTasks) {
    if (arrayOfTasks.length === 0){
        showNoItems();
    }
    else {
        showTasks();
    }
}

checkDivs(arrayOfTasks);

// Show No Items Div Function
function showNoItems () {
    noItemDiv.style.display = "block";
    tasksDiv.style.display = "none";
}

function showTasks () {
    noItemDiv.style.display = "none";
    tasksDiv.style.display = "block";
}


// Add Task Dom
let taskTitle = document.getElementById("task-title");
let taskDay = document.getElementById("task-day");
let taskTime = document.getElementById("task-time");
let saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(taskTitle.value !== "" && taskDay.value !== "" && taskTime.value !== ""){
        // Add Task To Array Of Tasks
        addTask(taskTitle.value, taskDay.value, taskTime.value);

        // Clear Form Inputs
        clearFormInputs();

        // Close Form
        addFormToggle();

        // Add Task To Page
        addTaskToPage(arrayOfTasks);

        // Add Tasks To Local Storage
        addTasksToLocalStorage(arrayOfTasks)

        // Check Divs
        checkDivs(arrayOfTasks);
    }
    else {
        alert("All Inputs Is Required!")
    }
});

// Clear Form Inputs Function
function clearFormInputs (){
    taskTitle.value = "";
    taskDay.value = "";
    taskTime.value = "";
}

// Add Tasks To Page
function addTaskToPage(arrayOfTasks){
    tasksList.innerHTML = "";

    arrayOfTasks.forEach(task => {
        // Single Task Div
        let singleTask = document.createElement("li");
        singleTask.className = `single-task ${task.status == true? "completed" : " "}`;
        singleTask.dataset.id = task.id;
        tasksList.appendChild(singleTask);

        // Done Button in Single Task
        let taskDoneBtn = document.createElement("button");
        taskDoneBtn.className = "done-btn";
        taskDoneBtn.dataset.id = "status";
        singleTask.appendChild(taskDoneBtn);

        // Not Done Icon for Done Button
        let notDoneIcon = document.createElement("span");
        notDoneIcon.className = "not-done-icon ri-checkbox-blank-circle-line icon";
        taskDoneBtn.appendChild(notDoneIcon);

        // Done Icon for Done Button
        let doneIcon = document.createElement("span");
        doneIcon.className = "done-icon ri-checkbox-circle-line icon";
        taskDoneBtn.appendChild(doneIcon);

        // Task Detalis Div
        let taskDetails = document.createElement("div");
        taskDetails.className = "task-details";
        singleTask.appendChild(taskDetails);

        // Task Name Para
        let taskName = document.createElement("p");
        taskName.className = "task-name";
        taskName.textContent = task.title;
        taskDetails.appendChild(taskName);

        // Task Day & Time Div
        let taskDdayTime = document.createElement("div");
        taskDdayTime.className = "day-time";
        taskDetails.appendChild(taskDdayTime);

        // Task Day
        let taskDay = document.createElement("p");
        taskDay.className = "day";
        taskDdayTime.appendChild(taskDay);

        // Calender Icon
        let dayIcon = document.createElement("span");
        dayIcon.className = "ri-calendar-line icon";
        taskDay.appendChild(dayIcon);

        // Task Day Value
        let dayValue = document.createElement("span");
        dayValue.className = "value day";
        dayValue.textContent = task.day;
        taskDay.appendChild(dayValue);

        // Task Day
        let taskTime = document.createElement("p");
        taskTime.className = "time";
        taskDdayTime.appendChild(taskTime);

        // Clock Icon
        let timeIcon = document.createElement("span");
        timeIcon.className = "ri-time-line icon";
        taskTime.appendChild(timeIcon);

        // Task Day Value
        let timeValue = document.createElement("span");
        timeValue.className = "value time";
        timeValue.textContent = task.time;
        taskTime.appendChild(timeValue);

        // Edit Task Button
        let editTaskBtn = document.createElement("button");
        editTaskBtn.className = "edit-btn";
        editTaskBtn.dataset.id = "edit";
        singleTask.appendChild(editTaskBtn);

        // Edit Icon
        let editIcon = document.createElement("span");
        editIcon.className = "trash-icon ri-pencil-line icon";
        editTaskBtn.appendChild(editIcon);

        // Delete Task Button
        let deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.className = "trash-btn";
        deleteTaskBtn.dataset.id = "delete";
        singleTask.appendChild(deleteTaskBtn);

        // Delete Icon
        let deleteIcon = document.createElement("span");
        deleteIcon.className = "trash-icon ri-delete-bin-6-line icon";
        deleteTaskBtn.appendChild(deleteIcon);
    });
}

function addTasksToLocalStorage(arrayOfTasks){
    window.localStorage.setItem("ToDoList", JSON.stringify(arrayOfTasks));
}

function getTasksFromLocalStorage(){
    let data = window.localStorage.getItem("ToDoList");
    if (data){
        let myTasks = JSON.parse(data);
        addTaskToPage(myTasks)
    }
}

getTasksFromLocalStorage();
