const smileys = ['😢', '😞', '😐', '😀', '😎'];

const button = document.getElementById('button');
button.addEventListener('click', function (e) {
    if (e?.target?.dataset?.index > 0) {
        starClicked(e.target.dataset.index);
    }
});

button.addEventListener('mouseover', function (e) {
    if (e?.target?.dataset?.index > 0) {
        starClicked(e.target.dataset.index, 'hover');
    }
});

button.addEventListener('mouseout', function (e) {
    if (e?.target?.dataset?.index > 0) {
        for (let i = 0; i < button.children.length; i++) {
            button.children[i].classList.remove('star-hover');
            button.children[i].classList.remove('star-hover-removed');
        }
    }
});

function starClicked(index, type = 'click') {
    if (type == 'hover') {
        for (let i = 0; i < button.children.length; i++) {
            button.children[i].classList.remove('star-hover');
            button.children[i].classList.add('star-hover-removed');
        }
        for (let i = 0; i < index; i++) {
            button.children[i].classList.add('star-hover');
            button.children[i].classList.remove('star-hover-removed');

        }
    } else {
        for (let i = 0; i < button.children.length; i++) {
            button.children[i].classList.remove('star-filled');
        }
        for (let i = 0; i < index; i++) {
            button.children[i].classList.add('star-filled');
        }
        document.getElementById('emoji').innerText = smileys[index - 1];
    }
}