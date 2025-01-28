let input = document.querySelector('#input');
input.addEventListener('keyup', (e) => {
    let onlyNumbers = input.value.replace(/\D/g, '')
    if (onlyNumbers.length > 2) {
        input.value = '+(' + onlyNumbers.substring(0, 2) + ') - ' + onlyNumbers.substring(2)
    } else if (onlyNumbers.length <= 2) {
        input.value = onlyNumbers
    }
})