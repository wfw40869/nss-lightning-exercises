// 1. Add a <script> tag to your HTML to load the JavaScript file
// 2. Design a function named evenOrOdd that take a single number as an argument.
// 3. It should return the string "Even" if the number is evenly divisible by two.
// 4. It should return the string "Odd" if the number is not evenly divisible by two.
// 5. Invoke the function once with an even number argument
// 6. Invoke the function once with an odd number argument

const evenOdd = num => {
    if (num % 2 === 0) {
        return "Even"
    }
    return "Odd"

}



// 1. Create an array of numbers. Some even, some odd.
// 2. Iterate the array using the forEach() array method, and invoke the evenOrOdd function passing the current number as the argument.
// 3. Use console.log to display the result in the Developer Console.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.forEach(currentNumber => {
    const isItEvenOrOdd = evenOdd(currentNumber)
    console.log(`Nums array ${currentNumber} is: ${isItEvenOrOdd}`)
})