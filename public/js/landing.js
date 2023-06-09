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
