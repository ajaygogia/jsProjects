let number = Math.random() * 100;
number = Math.floor(number);
document.getElementById('start').disabled = false;
document.getElementById('submit').disabled = true;
const guess = document.querySelector('#number')
guess.value = ''
guess.disabled = true;
let guessArray = [];

function enter(e) {
    if (e.keyCode === 13) {
        submit();
    }
}

function submit() {
    if (parseInt(guess.value) < 1 || parseInt(guess.value) > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        if (guessArray[guessArray.length - 1] != guess.value) {
            guessArray.push(guess.value);
            if (guessArray.length > 0) {
                document.getElementById('guess').innerHTML = "Previous Guesses: " + guessArray.join(', ');
            }
        }
        if (parseInt(guess.value) == number) {
            document.getElementById('result').innerHTML = "Congratulations! You guessed the number!";
            document.getElementById('submit').disabled = true;
            document.getElementById('start').disabled = false;
            guess.disabled = true;
        } else if (parseInt(guess.value) > number) {
            document.getElementById('result').innerHTML = "Too High!";
            guess.value = '';
        } else {
            document.getElementById('result').innerHTML = "Too Low!";
            guess.value = '';
        }
    }
}

function start() {
    document.getElementById('submit').disabled = false;
    document.getElementById('start').disabled = true;
    document.getElementById('guess').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    guessArray = [];
    number = Math.random() * 100;
    number = Math.floor(number);
    guess.value = '';
    guess.disabled = false
}