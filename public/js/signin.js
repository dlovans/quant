const eye = document.querySelector('.eye')
const eyeLine = document.querySelector('.eye-line')
const eInputField = document.querySelector('.email')
const pwInputField = document.querySelector('.password')



eye.addEventListener('click', function () {
    if (!eyeLine.classList.contains('eye-line-hidden')) {
        eyeLine.classList.toggle('eye-line-hidden')
        pwInputField.setAttribute('type', 'text')
    } else {
        eyeLine.classList.toggle('eye-line-hidden')
        pwInputField.setAttribute('type', 'password')

    }
})

const emailRegex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.) {3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\])$', 'i');

let timer;
eInputField.addEventListener('input', function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
        let testEmail = emailRegex.test(eInputField.value)
        if (eInputField.value === "") {
            eInputField.classList.remove('input-error')
            eInputField.classList.remove('input-success')

        } else {
            if (testEmail) {
                eInputField.classList.add('input-success')
                eInputField.classList.remove('input-error')
            } else {
                eInputField.classList.add('input-error')
                eInputField.classList.remove('input-success')
            }
        }

    }, 1000)
})