let input = document.querySelectorAll('.number')

input.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        let value = e.target.value
        let next = input.nextElementSibling
        let previous = input.previousElementSibling
        if (!/^\d*$/.test(value)) {
            e.target.value = value.slice(0, -1)
            return
        }
        if (value.length > 0 && next) {
            next.focus()
        } else if (value.length === 0 && previous && e.key === 'Backspace') {
            previous.focus()
        }
    })
})