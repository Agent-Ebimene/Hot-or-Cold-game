const gameBtn = document.getElementById('game__button');
function checkGuess() {
    const randomNumber = parseInt(Math.random() * 100 + 1);
    const guess = prompt('Enter your guess here ');
    if (guess.trim()==='' || isNaN(guess)) {
        alert('Please enter a valid number');
    } else {
        console.log(randomNumber);
        if (guess > randomNumber) {
            alert('Your guess is too high');
    
        } else if (guess < randomNumber) {
            alert('Your guess is too low');
    
        } else {
            alert('You guessed correctly!');
        }
    }
}
gameBtn.addEventListener('click', checkGuess);
