// 1. Create a function that logs the result of adding two numbers
const addTwoNumbers = (firstNumber, secondNumber) => console.log(`The result is: ${firstNumber + secondNumber}`)
const multFunction = (firstNumber, secondNumber) => console.log(`The result is: ${firstNumber * secondNumber}`)

addTwoNumbers(8, 8)
addTwoNumbers(100, 50)
addTwoNumbers(20, 8)


const calculate = (num1, num2, doSomething) => {
    doSomething(num1, num2)
}

calculate(17, 17, addTwoNumbers)
calculate(17, 17, multFunction)