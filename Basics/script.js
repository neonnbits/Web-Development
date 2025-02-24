//regular function
function greet(name) {
    return "Hello " + name + "!";
}

//arrow function
const greetfunc = (name) => "Hello " + name + "!";

console.log(greetfunc("deek"));

//closure
// when a function remembers the variables from its outer scope even after that outer function 
//has finished executing

function counter() {
    let counter = 0;

    return function inner() {
        counter++;
        console.log(counter);
    };
}

const increment = outer(); // outer() runs and returns inner()

increment(); // 1
increment(); // 2
increment(); // 3


//function arguments
const addNumbers = (...numbers) => numbers.reduce((sum, num) => (sum+num), 0);

console.log(addNumbers(1,2,3,4,5));

const multiply = (...args) => args.reduce((product, num) => product * num, 1);
console.log(multiply(2,3,4))

// higher order functions
// they are functions that return a function or take another function as an argument
var createCounter = function(init) {
    let currValue = init;
    return {
        increment: () => {return ++currValue},
        decrement: () => {return --currValue},
        reset: () => {currValue = init; return currValue; }
    }
};