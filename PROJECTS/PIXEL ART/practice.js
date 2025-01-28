let color = 'transparent'
const rows = Math.floor((window.innerHeight - 200) / 30);
const cols = Math.floor((0.9 * window.innerWidth) / 30);
const boardElement = document.getElementById('board');
const grids = cols * (rows + 1);

for (let i = 0; i < grids; i++) {
    boardElement.appendChild(document.createElement('div')).classList.add('box');
}

let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => {
        if (isMouseDown) {
            box.style.backgroundColor = color;
        }
    });
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = color
    })
})

document.getElementById('colors').addEventListener('click', (e) => {
    if (e.target.style.backgroundColor) {
        color = e.target.style.backgroundColor
    }
})

function clearCanvas() {
    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = 'transparent'
    })
}
