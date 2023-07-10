const menuBtn = document.querySelector('.menu-button')
const menuWrapper = document.querySelector('.menu-wrapper')
const lineTwo = document.querySelector('.line2')
const sideNavbar = document.querySelector('.side-navbar')


// Eventhandler for menu button. first, second and third variables used to clear timeouts if user rapidly clicks menu
let menuOpen = false
let first;
let second;
let third;
menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        clearTimeout(second)
        clearTimeout(third)
        menuOpen = true
        sideNavbar.classList.add('side-navbar-active')
        lineTwo.classList.add('line2-active-collapse')
        menuWrapper.classList.add('menu-wrapper-active-rotate')
        first = setTimeout(() => {
            lineTwo.classList.add('line2-active-expand')
        }, 400)

    } else {
        menuOpen = false
        clearTimeout(first)
        sideNavbar.classList.remove('side-navbar-active')
        lineTwo.classList.remove('line2-active-expand')
        second = setTimeout(() => {
            menuWrapper.classList.remove('menu-wrapper-active-rotate')
        }, 250)
        third = setTimeout(() => {
            lineTwo.classList.remove('line2-active-expand', 'line2-active-collapse')
        }, 400)
    }
})