const computerChoiceDisplay = document .getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementBYId('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoices) => possibleChoice.addEventListener('click', (e) => {
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generate computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 ) + 1 // or you can use possibleChoices.length

    if (randomNumber == 1) {
        computerChoice = 'rock'
    }
    if randomNumber == 2) {
        computerChoice ='scissors'
    }
    if randomNumber ==  3) {
        computerChoice ='paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
functiongetResult()  {
    if (computerChoice == userChoice) {
        result = 'its a draw'
    }
    if (computerChoice == 'rock' && userchoice == 'paper') {
        result = 'you win!'
    }
    if (computerChoice =='rock' && userChoice == 'scissors') {
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice ==="scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userchoice === "rock") {
    result = 'you loose!'
    }
    if (computerChoice === 'scissors' && userchoice =="rock")  {
    result = 'you win!'
    }
    if (computerChoice ==  'scissors' && userChoice == "paper") {
    result ='you loose!'
    }
    resultDisplay.innerHTML = result
}
