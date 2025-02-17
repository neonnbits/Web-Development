// function to find the sum of n numbers
const sum = (...n) => Array.from({length: 5}, (_, i) => i+1).reduce((n, sum) => n+sum, 0);

console.log(sum(5));

// reading a file
const fs = require('fs');
const contents = fs.readFileSync('file.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

//primitive data types

//numbers
let age = 23;      // Integer
let price = 99.99; // Floating-point
console.log(typeof age);   // "number"
console.log(typeof price); // "number"


//string
let name = "Alice";
let message = 'Hello, World!';

//boolean
// Truthy values: Non-empty strings, numbers (except 0), objects.
// Falsy values: 0, "", null, undefined, NaN, false.
let isJavaScriptFun = true;
let isTired = false;
console.log(typeof isJavaScriptFun); // "boolean"

//classes

class Car{
    constructor(brand, model){
        this._brand = brand;
        this._model = model;
    }

    info(){
        return `${this._brand} car from the year ${this._model}`;
    }

    get brand(){
        return `The car brand is ${this._brand}`
    }

    set brand(value){
        this._brand = value;
    }

    static age(year){
        return `${2025-year} years old.\n`;
    }
}

const car1 = new Car("Ford", "2020");
console.log(car1.info());
console.log(Car.age(2012))
console.log(car1.brand);

//base shape class
class Shape{
    constructor(color){
        this._color = color;
    }

    area(){
        console.log('The area function must be implemented by the subclass.');
    }
}