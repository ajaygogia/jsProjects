let cursor = 'O'
let X = []
let O = []
let game = document.getElementById('game')
startGame()

function startGame() {
    X = []
    O = []
    cursor = 'O'
    game.innerHTML = ''
    for (let i = 0; i < 9; i++) {
        let button = document.createElement('button')
        button.classList.add('button')
        button.dataset.index = i
        game.appendChild(button)
    }
    document.getElementById('result').innerHTML = ''
    document.querySelectorAll('.button').forEach(button => button.textContent = '')
    buttonClick()
}

function buttonClick() {
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent || document.getElementById('result').innerHTML) return;
            e.target.textContent = cursor;
            if (cursor == 'O') {
                O.push(+e.target.dataset.index)
            } else {
                X.push(+e.target.dataset.index)
            }
            cursor = cursor == 'O' ? 'X' : 'O';
            winner()
        })
    })
}

function winner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (combination.every(index => X.includes(index))) {
            document.getElementById('result').innerHTML = 'X wins';
            return;
        }
        if (combination.every(index => O.includes(index))) {
            document.getElementById('result').innerHTML = 'O wins';
            return;
        }
    }
}