let userChoice = document.querySelectorAll(".choiceBtn");
let userScoreDisplay = document.querySelector("#userScore");
let computerScoreDisplay = document.querySelector("#cmptScore");
let computerChoiceDisplay = document.querySelector("#cmptChoice");
let userChoiceDisplay = document.querySelector("#userChoice");
let resultDisplay = document.querySelector("#result");

let userScore = 0;
let computerScore = 0;



const playGame = (userChose) => {
    let computerChoice = ["rock", "paper", "scissor"];
    let indexComputerChoice = Math.floor(Math.random() * 3);

    computerChoiceDisplay.innerText = computerChoice[indexComputerChoice];
    userChoiceDisplay.innerText = userChose;

    if (userChose === computerChoice[indexComputerChoice]) {
        console.log("draw");
        resultDisplay.innerText = "Draw";
    }
    else if (userChose === "rock" && computerChoice[indexComputerChoice] === "scissor") {
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log("user win");
        resultDisplay.innerText = "You Win";
    }
    else if (userChose === "paper" && computerChoice[indexComputerChoice] === "rock") {
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log("user win");
        resultDisplay.innerText = "You Win";
    }
    else if (userChose === "scissor" && computerChoice[indexComputerChoice] === "paper") {
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log("user win");
        resultDisplay.innerText = "You Win";
    }
    else {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        console.log("computer win");
        resultDisplay.innerText = "You Lose";
    }

}

userChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChose = choice.getAttribute('id');
        // console.log(userChose);
        playGame(userChose);
    })
});