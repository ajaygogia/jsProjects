let board = document.getElementById('board');
let className = 'black';
designBoard();

function designBoard() {
    className = 'white';
    for (let i = 0; i < 64; i++) {
        let square = document.createElement('button');
        square.dataset.id = i;
        className = className === 'black' ? 'white' : 'black';
        if (i % 8 == 0) {
            className = className === 'black' ? 'white' : 'black';
        }
        square.className = className;
        board.appendChild(square);
    }
}