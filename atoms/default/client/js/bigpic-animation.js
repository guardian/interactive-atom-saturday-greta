// Check when image is in view
const bigImages = document.querySelectorAll(".big-pic__image-wrapper")

const options = {
    rootMargin: '0px 0px -30% 0px',
    threshold: 0.000001,
}

const bigPicObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting === true) {
            entry.target.parentNode.classList.add("inView")
        }
        else {
            entry.target.parentNode.classList.remove("inView")
        }
    })
}, options) 

bigImages.forEach(img => {
    bigPicObserver.observe(img)
})


// Check when quote is in view
const bigQuotes = document.querySelectorAll(".big-pic__text-wrapper")

const optionsQuotes = {
    rootMargin: '0px 0px -30% 0px',
    threshold: 0
}

const bigQuoteObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting === true) {
            entry.target.classList.add("inView")
            entry.target.parentNode.classList.add("fadeOut")
        }
        else {
            entry.target.classList.remove("inView")
            entry.target.parentNode.classList.remove("fadeOut")
        }
    })
}, optionsQuotes) 


bigQuotes.forEach(img => {
    bigQuoteObserver.observe(img)
})
