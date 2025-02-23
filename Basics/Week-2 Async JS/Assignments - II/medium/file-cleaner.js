const fs = require('fs')

// let data = fs.readFileSync('../../file.txt', 'utf-8');

// if(data){
//     data = data.trim();
//     let newString = '';
//     let i=0;
//     while(i<data.length){
//         if(data[i] != " "){
//             newString+= data[i];
//             i++;
//         }
//         else{
//             while(data[i] == " ") i++;
//             newString+= " ";
//         }
//     }


//     console.log(newString);
// }

// standard accepted method

const filePath = "../../file.txt";

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.error("Error reading the file.", err);
        return;
    }

    const cleanedData = data.replace(/\s+/g)
})