const imageWrapper = document.querySelector('.image-wrapper')
const image = document.querySelector('.image')

// First text has different rootMargins so it's always visible 
const mobileWidth = window.matchMedia('(max-width: 980px)')

const setFirstRootMargin = () => mobileWidth.matches ? '-30% 0px 0px 0px' : '-20% 0px -20% 0px'

const optionsFirst = {
    rootMargin: setFirstRootMargin(),
    threshold: 0.1
}

const setSecondRootMargin = () => mobileWidth.matches ? '-30% 0px -5% 0px' : '-20% 0px -20% 0px'

const options = {
    rootMargin: setSecondRootMargin(),
    threshold: 0.1
}

const firstTrigger = document.getElementById('triggerFirst')
let firstIntersecting = false
const firstObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
        imageWrapper.classList.add("first-burst")
        firstTrigger.classList.add("inView")
        firstIntersecting = true

        imageWrapper.classList.remove("second-burst")
        imageWrapper.classList.remove("third-burst")
    }
    else if (firstIntersecting) {
        firstTrigger.classList.remove("inView")
        firstIntersecting = false
    } 
}, optionsFirst)




const secondTrigger = document.getElementById('triggerSecond')
const secondObserver = new IntersectionObserver(function(entries) {
    console.log(entries)
	if(entries[0].isIntersecting === true) {
        imageWrapper.classList.add("second-burst")
        imageWrapper.classList.remove("third-burst")
        secondTrigger.classList.add("inView")
    } 
    else {
        secondTrigger.classList.remove("inView")
    }        
}, options)



const thirdTrigger = document.getElementById('triggerThird')
const thirdObserver = new IntersectionObserver(function(entries) {
    console.log(entries)
	if(entries[0].isIntersecting === true) {
        imageWrapper.classList.add("third-burst")
        thirdTrigger.classList.add("inView")
    } 
    else {
        thirdTrigger.classList.remove("inView")
    }        
}, options)

firstObserver.observe(firstTrigger)
secondObserver.observe(secondTrigger)
thirdObserver.observe(thirdTrigger)

