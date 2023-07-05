const eye = document.querySelector('.eye')
const eyeLine = document.querySelector('.eye-line')
const eInputField = document.querySelector('.email')
const pwInputField = document.querySelector('.password')
const confirmBtn = document.querySelector('.confirm-signin')


// Display or hide password input field
eye.addEventListener('click', function () {
    if (!eyeLine.classList.contains('eye-line-hidden')) {
        eyeLine.classList.toggle('eye-line-hidden')
        pwInputField.setAttribute('type', 'text')
    } else {
        eyeLine.classList.toggle('eye-line-hidden')
        pwInputField.setAttribute('type', 'password')

    }
})

// Remove warning color after input
eInputField.addEventListener('input', function () {
    if (eInputField.classList.contains('input-warning')) {
        eInputField.classList.remove('input-warning')
    }
})

// Remove warning color after input
pwInputField.addEventListener('input', function () {
    if (pwInputField.classList.contains('input-warning')) {
        pwInputField.classList.remove('input-warning')
    }
})


// Client side validation on form data on form button click
confirmBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (eInputField.value === "") {
        eInputField.classList.add('input-warning')
        if (pwInputField.value === "") {
            pwInputField.classList.add('input-warning')
        }
    } else if (pwInputField.value === "") {
        pwInputField.classList.add('input-warning')
    } else {
        const emailRegex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.) {3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\])$', 'i');
        if (!emailRegex.test(eInputField.value)) {
            eInputField.classList.add('input-error')
        } else {
            const data = {
                email: eInputField.value,
                password: pwInputField.value
            }
            axios.post('/signin', data)
                .then(response => {
                    console.log(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})

