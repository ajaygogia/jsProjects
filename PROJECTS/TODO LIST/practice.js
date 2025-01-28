let listItems = ['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR']
let fullList = document.getElementById('list')
createList(listItems)
const ViaPrompt = false

function inputItem(event) {
    if (event.charCode == 13 && event?.target?.value?.trim() != '') {
        addItem(event?.target?.value)
        createList(listItems)
        event.target.value = ''
    }
}

function addItem(item) {
    listItems.push(item)
}

function createList(listItems) {
    fullList.innerHTML = ''
    for (let i = 0; i < listItems.length; i++) {
        const list = document.createElement('li')
        list.textContent = listItems[i]
        list.index = i
        const edit = document.createElement('button')
        edit.textContent = '✏️'
        edit.addEventListener('click', () => {
            if (ViaPrompt) {
                editViaPrompt(list.index)
            } else {
                editViaInput(list.index)
            }
        })
        list.appendChild(edit)
        const remove = document.createElement('button')
        remove.textContent = '❌'
        remove.addEventListener('click', () => {
            removeItem(list.index)
        })
        list.appendChild(remove)
        fullList.appendChild(list)
    }
}

function removeItem(index) {
    listItems.splice(index, 1)
    fullList.children[index].remove()
    for (let i = 0; i < fullList.children.length; i++) {
        fullList.children[i].index = i
    }
}

function editViaPrompt(index) {
    const edit = prompt('Edit Item', listItems[index])
    if (edit) {
        fullList.children[index].firstChild.textContent = edit
        listItems[index] = edit
    }
}
function editViaInput(index) {
    const input = document.createElement('input')
    input.type = 'text'
    input.value = listItems[index]
    fullList.children[index].innerHTML = ''
    fullList.children[index].appendChild(input)
    input.focus()
    input.addEventListener('keypress', (e) => {
        if (e.charCode == 13) {
            listItems[index] = input.value
            fullList.children[index].innerHTML = ''
            createList(listItems)
        }
    })
}
