function add (a, b){
    return a + b;
}
function notSum(input){
    if(typeof input !== 'number'){
        throw new Error('Input must be a number')
    }
}

function isTaskComplete (task){
    return task.done || false;
}
function isTaskOverdue (task, today){
    const taskDate = new Date(task.dueDate);
    const todayDate = new Date(today);
    
    if (isNaN(taskDate.getTime())) {
        throw new Error("Invalid date format");
    }
    
    return taskDate < todayDate;
}
module.exports = {
    add: add,
    isTaskComplete: isTaskComplete,
    isTaskOverdue: isTaskOverdue,
    notSum: notSum
}