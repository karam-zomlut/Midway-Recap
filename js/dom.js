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

