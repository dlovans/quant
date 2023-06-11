// Pricing button
const monthly = document.querySelector('.monthly')
const yearly = document.querySelector('.yearly')
const highlighter = document.querySelector('.highlighter')
const priceInteger = document.querySelector('.price-integer')
const billedAnually = document.querySelector('.billed-anually')

let defaultBoolean = true

monthly.addEventListener('click', function () {
    if (!defaultBoolean) {
        highlighter.classList.remove('highlighter-active-ml', 'highlighter-active-wh')
        yearly.classList.remove('yearly-active')
        monthly.classList.remove('monthly-inactive')
        priceInteger.textContent = "$49/month"
        billedAnually.classList.remove('billed-anually-active')
        defaultBoolean = true
    }
})

yearly.addEventListener('click', function () {
    if (defaultBoolean) {
        highlighter.classList.add('highlighter-active-ml', 'highlighter-active-wh')
        monthly.classList.add('monthly-inactive')
        yearly.classList.add('yearly-active')
        priceInteger.textContent = "$39/month"
        billedAnually.classList.add('billed-anually-active')
        defaultBoolean = false
    }
})



// Faq functionality

const faqCards = document.querySelectorAll('.faq')

for (let faqCard of faqCards) {
    faqCard.addEventListener('click', function () {
        console.log(faqCard.childNodes)
        faqCard.childNodes[3].childNodes[0].classList.toggle('arrow-active')
        faqCard.childNodes[1].childNodes[3].classList.toggle('q-answer-active')
        faqCard.childNodes[1].childNodes[1].classList.toggle('q-question-active')
    })
}

// Menu button

const menuBtn = document.querySelector('.menu-button')
const mainMenu = document.querySelector('.menu-container')
const lineWrapper = document.querySelector('.line-wrapper')
const lineOne = document.querySelector('.line1')
const lineTwo = document.querySelector('.line2')
const lineThree = document.querySelector('.line3')

menuBtn.addEventListener('click', function (e) {
    lineOne.classList.toggle('line1-active')
    lineTwo.classList.toggle('line2-active')
    lineThree.classList.toggle('line3-active')
    mainMenu.classList.toggle('menu-container-active')
    document.body.classList.toggle('overflow-menu-active')
})


document.addEventListener('mousedown', function (e) {
    if (mainMenu.classList.contains('menu-container-active')) {
        if (e.target !== mainMenu && e.target !== lineWrapper && e.target !== menuBtn && e.target !== lineOne && e.target !== lineTwo && e.target !== lineThree) {
            lineOne.classList.toggle('line1-active');
            lineTwo.classList.toggle('line2-active');
            lineThree.classList.toggle('line3-active');
            mainMenu.classList.toggle('menu-container-active');
            document.body.classList.toggle('overflow-menu-active');
        }
    }
});
