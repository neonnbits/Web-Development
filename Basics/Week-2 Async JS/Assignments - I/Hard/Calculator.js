class Calculator{
    constructor(){
        this.result = 0;
    }

    add(num){
        this.result += num;
    }

    subtract(num){
        this.result -= num;
    }

    multiply(num){
        this.result *= num;
    }

    divide(num){
        if(num === 0) {
            throw new Error("Cannot divide by zero.");
        }
        this.result /= num;
    }

    clear(){
        this.result = 0;
    }

    getResult(){
        return this.result;
    }

    calculate(expression) {
        try {
            // Remove all extra spaces
            const sanitizedExpression = expression.replace(/\s+/g, '');

            // Validate expression (ensure it contains only valid characters)
            if (!/^[\d+\-*/().]+$/.test(sanitizedExpression)) {
                throw new Error("Invalid characters in expression");
            }

            if(/\/0(?!\.)/.test(sanitizedExpression)) throw new Error("Cannot divide by Zero.");

            // Use `eval` to calculate the result
            this.result = new Function(`return ${sanitizedExpression}`)();

            return this.result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

let calc = new Calculator(10);
console.log(calc.calculate("10 + 2 * 3"));

module.exports = Calculator;