const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error!');
    }
};

const getComputerChoice = () => {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';


        case 1:
            return 'paper';

        default:
            return 'scissors'

    }
};


function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'user won';
    }
    if (userChoice === computerChoice) {
        return 'game is a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won';
        } else {
            return 'user won';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won';
        } else {
            return 'user won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won';
        } else {
            return 'user won';
        }
    }
}

const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('you threw:' + userChoice);
    console.log('the computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));


};
playGame();