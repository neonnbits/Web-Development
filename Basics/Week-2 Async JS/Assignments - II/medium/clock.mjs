import {counter} from "../easy/counter-1.mjs"

const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

while(1){
    await counter(seconds);
    seconds++;
    if(seconds === 60) minutes++;
    if(minutes == 60) hours++;
    seconds = seconds%60;
    minutes = minutes%60;
    let meridium = hours > 12 ? "PM" : "AM";
    let secString = seconds > 9 ? seconds: `0${seconds}`
    hours = hours%24;
    console.log(`${hours}:${minutes}:${secString}  |  ${hours%12}:${minutes}:${secString} ${meridium}`);
}