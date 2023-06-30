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

let eTimer;
eInputField.addEventListener('input', function () {
    clearTimeout(eTimer)
    eTimer = setTimeout(() => {
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

const passwordRegex = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?!.*\\s).{8,}$")
const hasUppercase = new RegExp("[A-Z]")
const hasDigit = new RegExp("\\d")
const minLength = new RegExp(".{8,}")
const noSpaces = new RegExp("^(?!.*\\s).*")



pwInputField.addEventListener('click', function () {
    document.addEventListener('click', function (e) {
        if (e.target === pwInputField || e.target === pwgList || Array.from(listItems).includes(e.target) || e.target === eye || e.target === eyeLine) {
            pwgList.classList.add('pwg-list-active');
        } else {
            pwgList.classList.remove('pwg-list-active');
        }
    })
})


function updateListItem(listItem, test) {
    if (test) {
        listItem.classList.remove('listItem-fail')
        listItem.classList.add('listItem-pass')
    } else {
        listItem.classList.remove('listItem-pass')
        listItem.classList.add('listItem-fail')
    }
}


let pwTimer;
pwInputField.addEventListener('input', function () {
    clearTimeout(pwTimer)
    pwTimer = setTimeout(() => {
        let testPassword = passwordRegex.test(pwInputField.value)
        let testUppercase = hasUppercase.test(pwInputField.value)
        let testHasDigit = hasDigit.test(pwInputField.value)
        let testMinLength = minLength.test(pwInputField.value)
        let testSpacesNull = noSpaces.test(pwInputField.value)
        if (pwInputField.value === "") {
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
                pwInputField.classList.add('input-success')
                pwInputField.classList.remove('input-error')
            } else {
                pwInputField.classList.remove('input-success')
                pwInputField.classList.add('input-error')
            }
        }
    }, 300)
})