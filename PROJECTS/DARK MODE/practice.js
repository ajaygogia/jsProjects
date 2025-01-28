const fullDark = document.querySelector('#fullDark')
const containerDark = document.querySelector('#containerDark')
const container = document.querySelector('#container')
if (JSON.parse(localStorage.getItem('fullDark'))) {
    document.body.classList.add('dark')
    fullDark.checked = true
}
if (JSON.parse(localStorage.getItem('containerDark'))) {
    container.classList.add('dark')
    containerDark.checked = true
}
fullDark.addEventListener('click', () => {
    if (fullDark.checked) {
        document.body.classList.add('dark')
        localStorage.setItem('fullDark', true)
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('fullDark', false)
    }
})
containerDark.addEventListener('click', () => {
    if (containerDark.checked) {
        container.classList.add('dark')
        localStorage.setItem('containerDark', true)
    } else {
        container.classList.remove('dark')
        localStorage.setItem('containerDark', false)
    }
})