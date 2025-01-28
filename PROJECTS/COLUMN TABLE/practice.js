const rows = document.getElementById('rows');
const columns = document.getElementById('columns');
const table = document.getElementById('table');

function updateTableHorizontal() {
    table.innerHTML = '';
    let number = 1
    for (let i = 1; i < +rows.value + 1; i++) {
        const newRow = document.createElement('tr')
        for (let j = 1; j < +columns.value + 1; j++) {
            const newColumns = document.createElement('td')
            newColumns.innerHTML = number++
            newRow.appendChild(newColumns)
        }
        table.appendChild(newRow)
    }
}

function updateTableVertical() {
    table.innerHTML = '';
    let number = 1
    rowsArray = []
    for (let i = 1; i < +rows.value + 1; i++) {
        const newRow = document.createElement('tr')
        rowsArray.push(newRow)
    }
    for (let j = 1; j < +columns.value; j++) {
        for (let k = 1; k < +rowsArray.length + 1; k++) {
            const newColumns = document.createElement('td')
            newColumns.innerHTML = number++
            rowsArray[k]?.appendChild(newColumns)
        }
        --number
    }
    for (let k = 1; k < +rowsArray.length; k++) {
        table?.appendChild(rowsArray[k])
    }
}