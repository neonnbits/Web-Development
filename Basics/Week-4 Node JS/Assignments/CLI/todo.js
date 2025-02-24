const {program} = require('commander');
const fs = require("fs");

function loadTasks(){
    const data = fs.readFileSync('tasks.json', 'utf-8');
    return JSON.parse(data);
}

program
    .name("todo-app")
    .description("CLI to get file information.")
    .version("1.0.0")

program.command("cs")
    .description("Add a to-do to the file.")
    .option("-n", "Enter the task ID to delete.")
    .option("-t", "Enter the task title to delete.")
    .argument("<string>", "todo")
    .action((todo, options) => {
        let tasks = loadTasks();
        if(options.n ^ options.t){
            let flag = 1;
            if(options.n){
                tasks.forEach((e) => {
                    if(e.id === parseInt(todo)){
                        e.status = "done";
                        flag = 0;
                    }
                })
            }
            else{
                tasks.forEach((e) => {
                    if(e.name === todo){
                        e.status = "done";
                        flag = 0;
                    }
                })
            }

            if(flag) console.log(`Task ${todo} not found.`);
            else{
                fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 4));
                console.log(`Task ${todo} marked done successfully.`);
            }
        }
        else{
            console.log("You should choose one option to proceed.")
        }
    })

program.command("add")
    .description("Mark a to-do as done.")
    .argument("<string>", "todo")
    .action((todo) => {
        let tasks = loadTasks();
        let newTask = {id: tasks.length ? tasks[tasks.length-1].id + 1: 1, title: todo, status: "pending"};
        let duplicate = tasks.forEach((e) => {
            if(e.title === todo){
                console.log("Task already defined.")
                process.exit(0);
            }
        })

        tasks.push(newTask);
        fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 4));
        console.log("Task added successfully.");
    })

program.command("view")
    .description("View To-Do's.")
    .action((todo) => {
        let tasks = loadTasks();
        console.log(tasks)
    })

program.command("delete")
    .description("Delete a to-do from the file.")
    .option("-n", "Enter the task ID to delete.")
    .option("-t", "Enter the task title to delete.")
    .argument("<string>", "todo")
    .action((todo, options) => {
        let tasks = loadTasks();
        if(options.n ^ options.t){
            let len = tasks.length;
            if(options.n){
                tasks = tasks.filter(task => task.id !== parseInt(todo));
            }
            else{
                tasks = tasks.filter(task => task.title !== todo);
            }

            if(tasks.length === len) console.log(`Task ${todo} not found.`);
            else{
                fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 4));
                console.log(`Task ${todo} deleted successfully.`);
            }
        }
        else{
            console.log("You should choose one option to proceed.")
        }
    })

program.parse();