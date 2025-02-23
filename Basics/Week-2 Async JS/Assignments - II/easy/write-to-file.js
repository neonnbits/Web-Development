const fs = require('fs');

console.log("Before initiating the write request.")

fs.writeFile('../../file.txt', "This is written to the file.", 'utf-8', (err) => {
    if(err){
        console.error("Error occured while writing to file.");
    }
    else{
        console.log("File successfully written.")
    }
})

console.log("After initiating the write request.")