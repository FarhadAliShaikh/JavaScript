// write a function that takes in a string and returns the number of vowels in the string

function vowelsCount(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" 
        || str[i] == "o" || str[i] == "u") {
            count++;
        }
    }
    return count;
}

console.log(vowelsCount("hello world"));


// Same task with arrow function

const vowelsCount2 = (str) => {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" 
        || str[i] == "o" || str[i] == "u") {
            count++;
        }
    }
}

console.log(vowelsCount("hello"));