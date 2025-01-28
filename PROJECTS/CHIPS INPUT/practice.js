let chipValue = '';
let chipArray = [];
let chipContainer = document.getElementById('chipContainer')
createArray(chipArray)
function input(event) {
    if (event.key === 'Enter' && chipValue.trim() !== '') {
        chipArray.push(chipValue);
        event.target.value = '';
        chipValue = ''
        createArray(chipArray);
    } else {
        chipValue = event.target.value;
        let lastChip = document?.getElementById('last');
        if (lastChip) {
            lastChip.textContent = chipValue;
        }
        if (lastChip.textContent === '') {
            lastChip.style.display = 'none';
        } else {
            lastChip.style.display = 'flex';
        }
    }
}

function createArray(chipArray) {
    chipContainer.innerHTML = '';
    for (let i = 0; i <= chipArray.length; i++) {
        const chip = document.createElement('div');
        chip.classList.add('chip');
        chip.textContent = chipArray[i];
        if (i !== chipArray.length) {
            const remove = document.createElement('button');
            remove.textContent = 'x';
            remove.onclick = function () {
                chipArray.splice(i, 1);
                createArray(chipArray);
            }
            chip.appendChild(remove);
        } else {
            chip.id = 'last'
            chip.style.display = 'none';
        }
        chipContainer.appendChild(chip);
    }
}