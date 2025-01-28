let input = document.querySelector('#input')
const lowerCase = document.querySelector('#lowerCase span')
const upperCase = document.querySelector('#upperCase span')
const camelCase = document.querySelector('#camelCase span')
const pascalCase = document.querySelector('#pascalCase span')
const snakeCase = document.querySelector('#snakeCase span')
const kebabCase = document.querySelector('#kebabCase span')
const trimCase = document.querySelector('#trimCase span')

function transform() {
    let camelCaseText = input.value.trim().replace(/\s+/g, ' ').split(' ')
    let pascalCaseText = input.value.trim().replace(/\s+/g, ' ').split(' ')
    pascalCaseText[0] = pascalCaseText[0][0]?.toUpperCase() + pascalCaseText[0]?.slice(1)
    for (let i = 1; i < camelCaseText.length; i++) {
        camelCaseText[i] = camelCaseText[i][0]?.toUpperCase() + camelCaseText[i].slice(1)
        pascalCaseText[i] = pascalCaseText[i][0]?.toUpperCase() + pascalCaseText[i].slice(1)
    }
    lowerCase.innerHTML = input.value.trim() != '' ? input.value.toLowerCase() : ''
    upperCase.innerHTML = input.value.trim() != '' ? input.value.toUpperCase() : ''
    camelCase.innerHTML = input.value.trim() != '' ? camelCaseText.join('') : ''
    pascalCase.innerHTML = input.value.trim() != '' ? pascalCaseText.join('') : ''
    snakeCase.innerHTML = input.value.trim() != '' ? input.value.replace(/ /g, '_') : ''
    kebabCase.innerHTML = input.value.trim() != '' ? input.value.replace(/ /g, '-') : ''
    trimCase.innerHTML = input.value.trim() != '' ? input.value.replace(/ /g, '') : ''
}

function extra() {
    lowerCase.innerText = input.value.toLowerCase()
    upperCase.innerText = input.value.toUpperCase()
    camelCase.innerHTML = input.value.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())
    pascalCase.innerHTML = input.value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).replace(/\W+/g, '')
    snakeCase.innerText = input.value.replace(/\W+/g, '_')
    kebabCase.innerText = input.value.replace(/\W+/g, '-')
    trimCase.innerText = input.value.trim().replace(/\W+/g, '')
}