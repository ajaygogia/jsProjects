let progress = document.getElementById('progress');
let timer = 10;
let width = 0;
let interval

function start() {
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('range').disabled = true;
    progress.style.width = width + '%';
    let increase = 100 / (timer * 100);
    interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('pause').disabled = true;
        } else {
            width = width + increase > 100 ? 100 : width + increase;
            progress.style.width = width + '%';
        }
    }, 10);
}

function pause() {
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}

function reset() {
    width = 0;
    progress.style.width = width + '%';
    clearInterval(interval);
    document.getElementById('start').disabled = false;
    document.getElementById('range').disabled = false;

}

function updateValue(value) {
    document.getElementById('range-value').innerText = value;
    timer = value;
}
