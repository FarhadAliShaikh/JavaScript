// Find average marks of students using array

const studentsMarks = [50,60,70,80,90,50]
let marksSum = 0

studentsMarks.forEach((marks) => marksSum += marks)

console.log(marksSum / studentsMarks.length)

