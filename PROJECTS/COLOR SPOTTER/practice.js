let rows = 1;
let cols = 1;
let score = 0;
let padding = 40
let number = (Math.random() * 10).toFixed((rows * cols).length - 1);
const board = document.getElementById('board');
var color;
var oddColor;
startGame();

function startGame() {
    ++rows;
    ++cols;
    number = (Math.random() * 10).toFixed(((rows + 1) * (cols + 1)).length - 1);
    var ratio = 0.618033988749895;
    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;
    color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';
    designBoard();
};

function designBoard() {
    let no = 0;
    for (let i = 0; i <= rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j <= cols; j++) {
            const col = document.createElement('td');
            col.classList.add('cell');
            no++;
            if (no == number) {
                col.style.backgroundColor = oddColor;
                col.style.color = 'white';
            } else {
                col.style.backgroundColor = color;
                col.style.color = 'black';
            }
            col.style.padding = padding + 'px';
            row.appendChild(col);
        }
        board.appendChild(row);
    }
    if (padding >= 20) {
        padding = padding - 5
    }
}

board.addEventListener('click', (e) => {
    if (e.target.style.color == 'white') {
        ++score
        document.getElementById('currentScore').innerHTML = score;
        board.innerHTML = '';
        startGame();
    } else if (e.target.style.color == 'black') {
        document.querySelectorAll('.cell').forEach(cell => {
            if (cell.style.color == 'white') {
                cell.style.backgroundColor = 'red';
            }
        })
        setTimeout(() => {
            padding = 40;
            board.innerHTML = '';
            rows = 1;
            cols = 1;
            score = 0
            document.getElementById('currentScore').innerHTML = score;
            startGame();
        }, 1000);
    }
});
