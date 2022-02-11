// Start Login Functions
let arrayOfTasks = [];

// Add Task Function
function addTask(title, day, time){
    const task = {
        id: Date.now(),
        title: title,
        day: day,
        time: time
    }

    // Push Task To Array Of Tasks
    arrayOfTasks = [...arrayOfTasks, task];

    // The Returns From Function
    return arrayOfTasks;
}


// Edit Task Function
function editTask(obj, newTitle, newDay, newTime){
    obj.title = newTitle;
    obj.day = newDay;
    obj.time = newTime;

    return obj;
}





// Export Functions To Test It
if (typeof module !== "undefined") {
    module.exports = {
        addTask,
        editTask
    };
}