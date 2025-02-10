// Problem 2.  Task Tracker
// Description:
// You have an array of task objects. Each task has a taskName, a completed status (boolean), and a priority (numerical value where lower numbers indicate higher priority). Your tasks are:
// find: Identify the first task with a high priority (for example, priority less than 3).
// findIndex: Find the index of the first task that is not completed.
// reduce: Count how many tasks have been completed.
// (forEach): Print all task names.
// const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];



const tasks = [   
    { taskName: "Write report", completed: true, priority: 2 },   
    { taskName: "Attend meeting", completed: false, priority: 3 },   
    { taskName: "Fix bug", completed: false, priority: 1 },   
    { taskName: "Update website", completed: true, priority: 4 } 
];

// 1 :find: Identify the first task with a high priority (priority less than 3)

const highPriority = tasks.find((x) => {
     if(x.priority < 3){
        return x;
     }
})

console.log("first task with a high priority : " , highPriority);

// 2: findIndex: Find the index of the first task that is not completed.

const notCompleate = tasks.findIndex( (x) => {
    if(x.completed === false){
        return x;
    }
})

console.log("index of first Not Compleated task is " , notCompleate);


// 3 :using reduce: Count how many tasks have been completed.

const completedtask = tasks.reduce( (count , task) =>{
    return task.completed === true ? count + 1 : count;   

} , 0);   // 0 is initial state of count

console.log("Total Compleated tasks are" ,completedtask);


// 4 : (forEach): Print all task names.

tasks.forEach( (task) => {
    console.log(task.taskName);
})