// const allQuotes = document.querySelectorAll('.quote')


// const images = document.querySelectorAll(".image")
// console.log(images)

// let count = 1

// allQuotes.forEach((i) => {
//     if (i) {
//         const observer = new IntersectionObserver((entries) => {
//             observerCallback(entries, observer, i)
//         },
//         {threshold: 0.5});    
//         observer.observe(i);
//     }
// })

// const observerCallback = (entries, observer, header) => {
//     entries.forEach((entry, i) => {
//          if (entry.isIntersecting) {
//              entry.target.classList.add("inView")
//             console.log("count is " + count)
//             if(count === 1) {
//                  const firstInterval = setInterval(function firstImageLoop() { 
//                     count = count += 1
//                     console.log("count is " + count)
//                     console.log('count is less than 4')
//                     return firstInterval
//                  }, 1000)
//              } if (count === 4) {
//                  function stopFirstInterval() {
//                     console.log("count is " + count)
//                     console.log('count is more than 4')
//                     clearInterval(firstInterval)
//                     return
//                  }
//              }
             
//          }
//          else {
//              entry.target.classList.remove("inView")
//          }
//     });
// };



const imageWrapper = document.querySelector('.image-wrapper')
const image = document.querySelector('.image')

const firstTrigger = document.getElementById('triggerFirst')
const firstObserver = new IntersectionObserver(function(entries) {
    console.log(entries)
	if(entries[0].isIntersecting === true) {
        imageWrapper.classList.add("first-burst")
        console.log("first-burst " + imageWrapper)
    } else {
        // imageWrapper.classList.remove("first-burst")
        console.log("first-burst " + imageWrapper)
    }        
}, options)




const secondTrigger = document.getElementById('triggerSecond')
const secondObserver = new IntersectionObserver(function(entries) {
    console.log(entries)
	if(entries[0].isIntersecting === true) {
        imageWrapper.classList.add("second-burst")
        console.log("second-burst " + imageWrapper)
    } else {
        // imageWrapper.classList.remove("second-burst")
        console.log("second-burst " + imageWrapper)
    }        
}, options)

const options = {
    root: image,
    rootMargin: '-100px',
    threshold: 1
}

firstObserver.observe(firstTrigger)
secondObserver.observe(secondTrigger)