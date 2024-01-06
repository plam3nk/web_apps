window.addEventListener('load', calculator)

function calculator() {
    const inputField = document.querySelector('.input-field input')
    const [clearBtn, equalBtn] = document.querySelectorAll(".input-field button")
    const [sevenBtn, eightBtn, nineBtn, fourBtn, fiveBtn, sixBtn, oneBtn, twoBtn, threeBtn, zeroBtn, dotBtn] = document.querySelectorAll(".number-buttons button")
    const [sumBtn, subtractBtn, divideBtn, multiplyBtn] = document.querySelectorAll('.action-buttons button')
    let counter = 0;
    let actionArr = [];
    let numberArr = [];
    clearBtn.addEventListener('click', () => {
        inputField.value = ''
        counter = 0
    })

    oneBtn.addEventListener('click', () => { inputField.value += 1 })
    twoBtn.addEventListener('click', () => { inputField.value += 2 })
    threeBtn.addEventListener('click', () => { inputField.value += 3 })
    fourBtn.addEventListener('click', () => { inputField.value += 4 })
    fiveBtn.addEventListener('click', () => { inputField.value += 5 })
    sixBtn.addEventListener('click', () => { inputField.value += 6 })
    sevenBtn.addEventListener('click', () => { inputField.value += 7 })
    eightBtn.addEventListener('click', () => { inputField.value += 8 })
    nineBtn.addEventListener('click', () => { inputField.value += 9 })
    zeroBtn.addEventListener('click', () => { inputField.value += 0 })
    dotBtn.addEventListener('click', () => {
        if (counter === 0) {
            inputField.value += '.'
            counter = 1
        }
    })

    sumBtn.addEventListener('click', () => {
        actionArr.push('+');
        numberArr.push(Number(inputField.value))
        inputField.value = ''
        counter = 0
    })

    subtractBtn.addEventListener('click', () => {
        actionArr.push('-');
        numberArr.push(Number(inputField.value))
        inputField.value = ''
        counter = 0
    })

    divideBtn.addEventListener('click', () => {
        actionArr.push('/');
        numberArr.push(Number(inputField.value))
        inputField.value = ''
        counter = 0
    })

    multiplyBtn.addEventListener('click', () => {
        actionArr.push('*');
        numberArr.push(Number(inputField.value))
        inputField.value = ''
        counter = 0
    })

    equalBtn.addEventListener('click', () => {
        numberArr.push(Number(inputField.value))
        inputField.value = ''
        let result = 0;
        for (let i = 0; i < actionArr.length; i++) {
            let firstNum = numberArr.shift()
            let secondNum = numberArr.shift()

            if (actionArr[i] === '+') {
                result = firstNum + secondNum
            } else if (actionArr[i] === '-') {
                result = firstNum - secondNum
            } else if (actionArr[i] === '/') {
                result = firstNum / secondNum
            } else if (actionArr[i] === '*') {
                result = firstNum * secondNum
            }

            numberArr.unshift(result)
        }

        inputField.value = result
        numberArr = [];
        actionArr = [];
    })

    console.log(inputField.value)
}