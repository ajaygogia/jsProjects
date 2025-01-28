let leftList = ['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR'];
let rightList = ['JAVA', 'SPRING', 'REACT', 'SQL'];

const leftContainer = document.getElementById('left');
const rightContainer = document.getElementById('right');

const rightButton = document.getElementById('rightButton');
rightButton.disabled = true;
const leftButton = document.getElementById('leftButton');
leftButton.disabled = true;
const allRightButton = document.getElementById('allRightButton');
const allLeftButton = document.getElementById('allLeftButton');

createLeftList();
createRightList()

function createLeftList() {
    leftContainer.innerHTML = '';
    for (let i = 0; i < leftList.length; i++) {
        let div = document.createElement('div');
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');
        checkBox.id = leftList[i];
        checkBox.leftIndex = i;
        let label = document.createElement('label');
        label.htmlFor = leftList[i];
        label.textContent = leftList[i];
        div.appendChild(checkBox);
        div.appendChild(label);
        leftContainer.appendChild(div);
        extra();
    }
}

function createRightList() {
    rightContainer.innerHTML = '';
    for (let i = 0; i < rightList.length; i++) {
        let div = document.createElement('div');
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');
        checkBox.id = rightList[i];
        checkBox.rightIndex = i;
        let label = document.createElement('label');
        label.htmlFor = rightList[i];
        label.textContent = rightList[i];
        div.appendChild(checkBox);
        div.appendChild(label);
        rightContainer.appendChild(div);
    }
    extra();
}

function extra() {
    document.querySelectorAll('.checkbox').forEach(item => {
        item.addEventListener('click', (e) => {
            rightButton.disabled = true;
            leftButton.disabled = true;
            for (let i = 0; i < leftContainer.children.length; i++) {
                if (leftContainer.children[i].children[0].checked) {
                    rightButton.disabled = false;
                }
            }
            for (let i = 0; i < rightContainer.children.length; i++) {
                if (rightContainer.children[i].children[0].checked) {
                    leftButton.disabled = false;
                }
            }
        });
    });
    rightButton.disabled = true;
    leftButton.disabled = true;
}

extra();

function switchItems(string) {
    let indexes = [];
    if (string == 'right') {
        for (let i = 0; i < leftContainer.children.length; i++) {
            if (leftContainer.children[i].children[0].checked) {
                indexes.push(i);
                rightList.push(leftList[i]);
            }
        }
        for (let i = indexes.length - 1; i >= 0; i--) {
            leftList.splice(indexes[i], 1);
        }
    } else if (string == 'left') {
        for (let i = 0; i < rightContainer.children.length; i++) {
            if (rightContainer.children[i].children[0].checked) {
                indexes.push(i);
                leftList.push(rightList[i]);
            }
        }
        for (let i = indexes.length - 1; i >= 0; i--) {
            rightList.splice(indexes[i], 1);
        }
    }
    createLeftList()
    createRightList()
}

function switchAll(string) {
    if (string == 'right') {
        for (let i = 0; i < leftList.length; i++) {
            rightList.push(leftList[i]);
        }
        leftList = [];
    } else if (string == 'left') {
        for (let i = 0; i < rightList.length; i++) {
            leftList.push(rightList[i]);
        }
        rightList = [];
    }
    createLeftList()
    createRightList()
}