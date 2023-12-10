// Find average marks of students using array

const studentsMarks = [50,60,70,80,90,50]
let marksSum = 0

studentsMarks.forEach((marks) => marksSum += marks)

console.log(marksSum / studentsMarks.length)

// set Prices array after 10% discount

const prices = [100,200,300,400,500,600,700,800,900,1000]
let afterDiscountPrice = [] 

for (let i = 0; i < prices.length; i++) {
     prices[i] -= (prices[i] / 10)
    afterDiscountPrice.push(prices[i]) 
}

console.log("After 10% discount prices are: ")
console.log(afterDiscountPrice);