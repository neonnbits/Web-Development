const fs = require('fs');
const express = require('express')

const app = express();
app.use(express.json());
const router = express.Router();

function loadTasks(){
    try {
        const dataBuffer = fs.readFileSync("tasks.json", "utf-8");
        return JSON.parse(dataBuffer);
    } catch (error) {
        return []; // Return empty array if file doesn't exist
    }
}

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.post('/add', (req, res) => {
    const task = req.body;
    const tasks = loadTasks();

    // Check if the task already exists
    if (tasks.some((e) => e.title === task.title)) {
        return res.send("Task already exists.");
    }

    // Add new task
    tasks.push(task);
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2)); // Pretty format

    res.send("Added Task successfully.");
})

app.delete('/delete', (req, res) => {
    let task = req.body;
    console.log(task);
    let tasks = loadTasks();
    let flag = 0;

    //check if the task exists
    if (tasks.some((e) => e.title === task.title)) {
        flag = 1;
        tasks = tasks.filter((e) => e.title !== task.title);
    }
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2)); // Pretty format

    if(flag) res.send("Deleted the task successfully.");
    else res.send("Task not found");
})

app.get('/view', (req, res) => {
    let tasks = loadTasks();

    res.send(JSON.stringify(tasks));
})

app.patch('/update/:title', (req, res) => {
    let tasks = loadTasks();

    let {title} = req.params
})

app.listen(3000);