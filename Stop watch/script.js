const currentTime = document.querySelector("#currentTime");
const input = document.getElementById("inputNum");
const submitButton = document.getElementById("submitBtn");
const setTimer = document.getElementById("timer");

function time() {
    const currTime = new Date();
    // console.log(currTime);
    let time = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`
    // console.log(time);
    currentTime.innerText = `Now, ${time}`
}

// setInterval(time, 1000)

submitButton.addEventListener('click', () => {
    let timeLimit = input.value;
    let interval = setInterval(timer, 1000);
        function timer() 
        {
            setTimer.innerText = `${timeLimit}`
            if (timeLimit == 0) {
                clearInterval(interval);
            }
            timeLimit--;
        }
})
