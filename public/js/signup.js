const eye = document.querySelector('.eye')
const eyeLine = document.querySelector('.eye-line')
const eInputField = document.querySelector('.email')
const pwInputField = document.querySelector('.password')
const pwgList = document.querySelector('.pwg-list')
const listItems = document.querySelectorAll('.listItem')
const listItemOne = document.querySelector('.listItem-one')
const listItemTwo = document.querySelector('.listItem-two')
const listItemThree = document.querySelector('.listItem-three')
const listItemFour = document.querySelector('.listItem-four')
const confirmBtn = document.querySelector('.confirm-signup')
const signupForm = document.querySelector('#signup')


// Toggle to show or hide password
eye.addEventListener('click', function () {
    if (!eyeLine.classList.contains('eye-line-hidden')) {
        eyeLine.classList.toggle('eye-line-hidden')
        pwInputField.setAttribute('type', 'text')
    } else {
        eyeLine.classList.toggle('eye-line-hidden')
        pwInputField.setAttribute('type', 'password')

    }
})

// Regular expressions for testing input data
const emailRegex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.) {3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\])$', 'i');
const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?!.*\\s).{8,}$")
const hasUppercase = new RegExp("[A-Z]")
const hasDigit = new RegExp("\\d")
const minLength = new RegExp(".{8,}")
const noSpaces = new RegExp("^(?!.*\\s).*")


// Client-side testing of email formatting
let eTimer;
let eStatus = false
eInputField.addEventListener('input', function () {
    clearTimeout(eTimer)
    eTimer = setTimeout(() => {
        eInputField.classList.remove('input-warning')
        let testEmail = emailRegex.test(eInputField.value)
        if (eInputField.value === "") {
            eInputField.classList.remove('input-error')
            eInputField.classList.remove('input-success')
            eStatus = false

        } else {
            if (testEmail) {
                eInputField.classList.add('input-success')
                eInputField.classList.remove('input-error')
                eStatus = true
            } else {
                eInputField.classList.add('input-error')
                eInputField.classList.remove('input-success')
                eStatus = false
            }
        }

    }, 1000)
})




// Show password requirements on click
pwInputField.addEventListener('click', function () {
    pwgList.classList.add('pwg-list-active');
})

// Function to test password data against requirements
function updateListItem(listItem, test) {
    if (test) {
        listItem.classList.remove('listItem-fail')
        listItem.classList.add('listItem-pass')
    } else {
        listItem.classList.remove('listItem-pass')
        listItem.classList.add('listItem-fail')
    }
}


// Test if password meets all requirements
let pwTimer;
let pwStatus = false
pwInputField.addEventListener('input', function () {
    clearTimeout(pwTimer)
    pwTimer = setTimeout(() => {
        pwInputField.classList.remove('input-warning')
        let testPassword = passwordRegex.test(pwInputField.value)
        let testUppercase = hasUppercase.test(pwInputField.value)
        let testHasDigit = hasDigit.test(pwInputField.value)
        let testMinLength = minLength.test(pwInputField.value)
        let testSpacesNull = noSpaces.test(pwInputField.value)
        if (pwInputField.value === "") {
            pwStatus = false
            pwInputField.classList.remove('input-error')
            pwInputField.classList.remove('input-success')
            for (let singleListItem of listItems) {
                singleListItem.classList.remove('listItem-fail')
                singleListItem.classList.remove('listItem-pass')
            }
        } else {
            updateListItem(listItemFour, testSpacesNull)
            updateListItem(listItemThree, testHasDigit)
            updateListItem(listItemTwo, testMinLength)
            updateListItem(listItemOne, testUppercase)
            if (testPassword) {
                pwStatus = true
                pwInputField.classList.add('input-success')
                pwInputField.classList.remove('input-error')
            } else {
                pwStatus = false
                pwInputField.classList.remove('input-success')
                pwInputField.classList.add('input-error')
            }
        }
    }, 300)
})


// Client-side final validation before sending form data to server
confirmBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (eStatus && pwStatus) {
        signupForm.submit()
    } else {
        if (!eStatus) {
            if (eInputField.value === "") {
                eInputField.classList.remove('input-error')
                eInputField.classList.add('input-warning')
            }
            if (pwInputField.value === "") {
                pwInputField.classList.remove('input-error')
                pwInputField.classList.add('input-warning')
                pwgList.classList.add('pwg-list-active')
            }
            eInputField.focus()
        } else if (!pwStatus) {
            if (pwInputField.value === "") {
                pwInputField.classList.remove('input-error')
                pwInputField.classList.add('input-warning')
                pwgList.classList.add('pwg-list-active')

            }
            pwInputField.focus()
        }
    }
})