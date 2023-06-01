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