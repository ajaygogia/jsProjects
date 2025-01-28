const wordList = ['Sakshit','Shivam','Sahil','Santu']
const span = document.querySelector('span')
let wordIndex = 0
let word = wordList[wordIndex]
let index = 0;
let reverseType = false;
setInterval(()=>{
    if (!reverseType) {
        span.innerText = span.innerText + word[index]
        index++
    } else {
        span.innerText = span.innerText.slice(0, span.innerText.length - 1)
    }
    if (span.innerText.length === 0 && reverseType) {
        reverseType = false
        if (wordIndex === wordList.length - 1) 
        wordIndex = -1
        index = 0
        word = wordList[++wordIndex]
    }
    if (word.length === index) {
        reverseType = true
    }
},100)