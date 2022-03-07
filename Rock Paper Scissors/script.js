const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
let btn = document.querySelectorAll('.choice');
let userChoice;
let computerChoice;
let result;

Array.from(btn).forEach(btn => {
    btn.addEventListener('click', function (e) {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        computerChoice = getComputerChoice();
        computerChoiceDisplay.innerHTML = computerChoice;
        result = getResult(userChoice, computerChoice);
        resultDisplay.innerHTML = result;
    });
});

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getResult() {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (userChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    } else if (userChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    } else if (userChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }
}

