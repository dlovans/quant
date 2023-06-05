const signinModal = document.querySelector('.signinModal')
const signinBtn = document.querySelector('.sign-in')
const modalOverlay = document.querySelector('.modal-container')
const mainContent = document.querySelector('.main')
const header = document.querySelector('.headnav')
const footer = document.querySelector('.theFoot')

signinBtn.addEventListener('click', function (e) {
    signinModal.classList.toggle('signinModal-active')
    modalOverlay.classList.toggle('modal-overlay')
    mainContent.classList.toggle('modalBlur')
    header.classList.toggle('modalBlur')
    footer.classList.toggle('modalBlur')
})

document.addEventListener('mousedown', function (e) {
    if (!signinModal.contains(e.target) && signinModal.classList.contains('signinModal-active')) {
        mainContent.classList.toggle('modalBlur')
        header.classList.toggle('modalBlur')
        footer.classList.toggle('modalBlur')
        signinModal.classList.toggle('signinModal-active')
        modalOverlay.classList.toggle('modal-overlay')
    }
})


// Pricing button
const monthly = document.querySelector('.monthly')
const yearly = document.querySelector('.yearly')
const highlighter = document.querySelector('.highlighter')

let defaultBoolean = true

monthly.addEventListener('click', function () {
    if (!defaultBoolean) {
        highlighter.classList.remove('highlighter-active-ml', 'highlighter-active-wh')
        yearly.classList.remove('yearly-active')
        monthly.classList.remove('monthly-inactive')
        defaultBoolean = true
    }
})

yearly.addEventListener('click', function () {
    if (defaultBoolean) {
        highlighter.classList.add('highlighter-active-ml', 'highlighter-active-wh')
        monthly.classList.add('monthly-inactive')
        yearly.classList.add('yearly-active')
        defaultBoolean = false
    }
})