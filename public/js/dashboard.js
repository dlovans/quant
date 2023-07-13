const menuBtn = document.querySelector('.menu-button')
const menuWrapper = document.querySelector('.menu-wrapper')
const lineTwo = document.querySelector('.line2')
const sideNavbar = document.querySelector('.side-navbar')
const sideMenu = document.querySelector('.sidemenu')
const sideMenuBtns = document.querySelectorAll('.sideMenu-button')
const sideMenuOverlay = document.querySelector('.overlay')
const viewOverlay = document.querySelector('.viewOverlay')

// This variable's related to the sidemenu item button click, not hamburger menu
let sideMenuItemClick;

// Eventhandler for menu button. first, second and third variables used to clear timeouts if user rapidly clicks menu
let menuOpen = false
let first;
let second;
let third;
menuBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    if (!menuOpen) {
        clearTimeout(sideMenuItemClick)
        clearTimeout(second)
        clearTimeout(third)
        menuOpen = true
        document.body.style.overflowY = "hidden"
        viewOverlay.classList.add('viewOverlay-active')
        sideNavbar.classList.add('side-navbar-active')
        lineTwo.classList.add('line2-active-collapse')
        menuWrapper.classList.add('menu-wrapper-active-rotate')
        first = setTimeout(() => {
            lineTwo.classList.add('line2-active-expand')
        }, 400)
    } else {
        menuOpen = false
        clearTimeout(first)
        document.body.style.overflowY = "scroll"
        viewOverlay.classList.remove('viewOverlay-active')
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


// On click, move span overlay to clicked button, hide sidemenu, remove hidden overflowY from body
for (let sideMenuBtn of sideMenuBtns) {
    sideMenuBtn.addEventListener('click', function () {
        // Find the top value for the clicked element, minus sidemenu top value
        let clickedBtn = sideMenuBtn.getBoundingClientRect().top
        let sidemenuTop = sideMenu.getBoundingClientRect().top
        let topOffset = clickedBtn - sidemenuTop
        sideMenuOverlay.style.top = `${topOffset + 5}px`
        // Close the sidemenu, clearTimeout in case users is rapid clicker
        menuOpen = false
        clearTimeout(first)
        document.body.style.overflowY = "scroll"
        sideMenuItemClick = setTimeout(() => {
            sideNavbar.classList.remove('side-navbar-active')
            lineTwo.classList.remove('line2-active-expand')
            second = setTimeout(() => {
                menuWrapper.classList.remove('menu-wrapper-active-rotate')
            }, 250)
            third = setTimeout(() => {
                lineTwo.classList.remove('line2-active-expand', 'line2-active-collapse')
            }, 400)
        }, 350)
        // Add statements for http requests for each button clicked, with value in html element
    })
}

// close sidemenu if user clicks on transparent overlay that spans the whole page
viewOverlay.addEventListener('click', function () {
    if (menuOpen) {
        menuOpen = false
        clearTimeout(first)
        viewOverlay.classList.remove('viewOverlay-active')
        document.body.style.overflowY = "scroll"
        sideMenuItemClick = setTimeout(() => {
            sideNavbar.classList.remove('side-navbar-active')
            lineTwo.classList.remove('line2-active-expand')
            second = setTimeout(() => {
                menuWrapper.classList.remove('menu-wrapper-active-rotate')
            }, 250)
            third = setTimeout(() => {
                lineTwo.classList.remove('line2-active-expand', 'line2-active-collapse')
            }, 400)
        }, 50)
    }
})

