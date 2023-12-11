// find given array's elements are greater than or equal 90 and store in another array

const arr = [10, 20, 30, 40, 89, 99, 95, 50, 60, 70, 80, 90, 100];

const newArr = arr.filter((value) => value >= 90);

console.log(newArr);

// Take a number n and create an array of 1-n elements

const n = 10;

const resultantArray =  []

for(let i = 1; i <= n; i++) {
    resultantArray.push(i);
}

console.log(resultantArray);

// Use reduce method to calculate the sum of all the numbers in an array

const sumOfArray = resultantArray.reduce((result, current) => result + current );

console.log(`Sum of Array: ${sumOfArray}`)

// Use reduce method to calculate the product of all the numbers in an array

const factorial = resultantArray.reduce((result, current) => result * current );

console.log(`Factorial of Array: ${factorial}`);