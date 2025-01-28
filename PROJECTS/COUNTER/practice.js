const decrease = document.querySelector('#decrease')
const increase = document.querySelector('#increase')
const reset = document.querySelector('#reset')
const value = document.querySelector('#counter')
const number = document.querySelector('#number')

decrease.addEventListener('click', () => {
    if (number.value == '') {
        alert('Please enter a number')
    } else {
        value.innerHTML = parseInt(value.innerHTML) - parseInt(number.value)
    }
})
increase.addEventListener('click', () => {
    if (number.value == '') {
        alert('Please enter a number')
    } else {
        value.innerHTML = parseInt(value.innerHTML) + parseInt(number.value)
    }
})
reset.addEventListener('click', () => {
    value.innerHTML = 0
    number.value = 1
})