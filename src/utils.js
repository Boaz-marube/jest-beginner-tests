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
function isTaskOverdue (){

    return ;
}
module.exports = {
    add: add,
    isTaskComplete: isTaskComplete,
    isTaskOverdue: isTaskOverdue,
    notSum: notSum
}