const {program} = require('commander');
const fs = require("fs");
const path = require("path")

program
    .name("file-util")
    .description("CLI to get file information.")
    .version("1.0.0")

program.command("count")
    .description("Count the number of characters/words in the file.")
    .option("-c", "Total number of characters in the file.")
    .option("-w", "Total number of words in the file.")
    .option("-l", "Total number of lines in the file.")
    .argument("<file>", "File path.")
    .action(async (filePath, options) => {
        const absolutePath = path.resolve(filePath);
        if(!fs.existsSync(absolutePath)){
            console.error("File doesn't exist at the path:", absolutePath);
            process.exit(1);
        }
        const data = await fs.promises.readFile(absolutePath, 'utf-8', (err, data) => data);
        if(options.w){
            console.log(`Total Number of characters in the file: ${data.split(/\s+/).length}`);
        }
        if(options.c){
            console.log(`Total Number of characters in the file: ${data.split('').length}`);
        }
        if(options.l){
            console.log(`Total Number of lines in the file: ${data.split('\n').length}`);
        }
    });

program.parse();