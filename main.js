const inputText = document.getElementById('typeBox')
const resultText = document.querySelector('span')
const button = document.getElementById('checkBtn')

let inputFilter;
console.log(resultText)
button.addEventListener('click', () => {
    let reverseInput = inputFilter.split("").reverse().join("")
    console.log(reverseInput)
    if (reverseInput === inputFilter) {
        resultText.innerHTML = "It is a Palindrome"
        console.log(`result text ${resultText.innerHTML}`)
    }
    else {
        resultText.innerHTML = "It is not a Palindrome"
        console.log(`result text ${resultText.innerHTML}`)
    }
})

inputText.addEventListener("keyup", () => {
    console.log(inputText.value)
    inputFilter = inputText.value.replace(/[^A-Z0-9]/ig, "")
    console.log(inputFilter)

    if (inputFilter) {
        return button.classList.add("active")
    }

    return button.classList.remove("active")
})
