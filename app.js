const inputElement = document.getElementById('input-element');
const result = document.querySelector('.result h4');
const restartBtn= document.getElementById('restart');
const gameBtn = document.getElementById('submit');
const gameButtons = document.querySelector('.game-btn');
const thermHeight = document.getElementById('therm-liquid');
let maxTemp;
let neutralTemp ;
let guessTemp ;
let randomNumber = parseInt(Math.random() * 100 + 1);


console.log(`Secret Number ${randomNumber}`);
if (randomNumber < 50) {
    maxTemp = 100 - randomNumber;
    console.log(`Max Temp=${maxTemp}`);
} else {
    maxTemp = randomNumber;
    console.log(`Max Temp=${maxTemp}`);
}
// Function to restart Game
const restartGame = () => {
    inputElement.value = '';
    randomNumber = parseInt(Math.random() * 100 + 1);
    neutralTemp = 0;
    console.log(`Secret Number=${randomNumber}`);
    if (randomNumber < 50) {
        let maxTemp = 100 - randomNumber;
        console.log(`Max Temp=${maxTemp}`);
    } else {
        maxTemp = randomNumber;
        console.log(`Max Temp=${maxTemp}`);
    }
    checkGuess();
    if (inputElement.value.trim() === '' || isNaN(inputElement.value) ){
        result.innerText = 'We are waiting for your guess!';
        return;
    }
}
/// function to checking the entered guess
const checkGuess = () => {
    // a value to compare with the guess temp
    neutralTemp = parseInt(Math.random() * 50 + 1);
    const inputValue = inputElement.value;
     const guess = +inputValue;
     if (inputValue.trim() === '' || isNaN(inputValue)) {
         result.innerText = 'Please enter a valid number';
         return;
    }
    
    console.log(`Guess=${guess}`);
    guessTemp = maxTemp - Math.abs(randomNumber - guess);
    console.log(`Temp= ${guessTemp}`);
    if (guessTemp === maxTemp) {
        result.innerText = 'You guessed right!';
    } else if(guessTemp > neutralTemp){
        result.innerText = 'Getting hotter!';
    } else if (guessTemp < neutralTemp) {
        result.innerText = 'Getting Colder!';
    } else {
        result.innerText = 'Neither cold nor hot!';
    } 
}

gameBtn.addEventListener('click',checkGuess);
restartBtn.addEventListener('click', restartGame);