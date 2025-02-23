const fs = require('node:fs');

try {
    const data = fs.readFileSync('../../file.txt', 'utf-8');
    console.log(data);

    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }

    console.log("sum: ", sum);
} 
catch (err) {
    console.error(err);
}

// Step 1: Start Execution

// 🔹 fs.readFile sends file reading to a worker thread and moves on.
// 🔹 The for-loop starts running (synchronously, on the main thread).

// Step 2: Worker Thread Completes fs.readFile

// 🔹 The worker thread completes the file reading in parallel.
// 🔹 But instead of executing the callback, it queues it in the callback queue.

// Step 3: The for-loop Blocks the Main Thread

// 🔹 The main thread is stuck executing the for-loop, so it cannot process the callback yet.
// 🔹 The event loop is busy with the loop, and nothing else gets executed.

// Step 4: Event Loop Finally Executes the Callback

// 🔹 Once the for-loop finishes, the event loop picks up the fs.readFile callback from the queue and executes it.
// 🔹 File contents are printed last, even though they were ready much earlier!