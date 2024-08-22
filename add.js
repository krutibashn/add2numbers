function addNumbers(a, b) {
    return a + b;
}

const num1 = parseInt(process.argv[2], 10);
const num2 = parseInt(process.argv[3], 10);
const result = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}`);
