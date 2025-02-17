// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             console.log("Hello there");
//         }, 5000)
//         console.log("Hello");
//     }, 3000)
//     console.log("Hi");
// }, 1000)

//promisified version

function promisifiedSetTimeout(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

// promisifiedSetTimeout(1000)
// .then(() => {
//     console.log("Hi")
//    return promisifiedSetTimeout(3000);
// })
// .then(() => {
//     console.log("Hello")
//     return promisifiedSetTimeout(5000);
// })
// .then(() => {
//     console.log("Hello there");
// })

//using async and await

// async function wait(){
//     await promisifiedSetTimeout(1000);
//     console.log("Hi")
//     await promisifiedSetTimeout(3000);
//     console.log("Hello")
//     await promisifiedSetTimeout(5000);
//     console.log("Hello there")
// }

// wait();

//writing an async function
import fs from 'fs';

function cleanFile(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if(err) return reject('error occured while reading the file.')
            data =  data.trim();
            fs.writeFile('file.txt', data, 'utf-8', (err) => {
                if(err) reject('error occured while writing to the file.')
                resolve("Done cleaning. File updated.")
            });
            
        });
    });
}

cleanFile('file.txt').then((data) => console.log(data)).catch(err => console.log(err))


//create promisified version of fetch

async function promisifiedFetch(url){
    const response = await fetch(url);
    return new Promise((resolve, reject) => {
        if(!response.ok) return reject("error occured!");
        else return resolve(response);
    })
}

promisifiedFetch('https://www.google.com/').then(data => console.log(data)).catch(err => console.error(err));


//create promisified readfile
function promisifiedReadFile(file){
    return new Promise((res, rej) => {
        fs.readFile((err, data) => {
            if(err) return reject("error occured");
            resolve(data);
        })
    });
}