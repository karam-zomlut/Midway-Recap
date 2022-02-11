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
    arrayOfTasks.push(task);

    // The Returns From Function
    return arrayOfTasks;
}





// Export Functions To Test It
if (typeof module !== "undefined") {
    module.exports = {
        addTask,

    };
}