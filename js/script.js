const btnSlide1 = document.querySelector("#slide-navegation-container div:nth-child(1)")
const btnSlide2 = document.querySelector("#slide-navegation-container div:nth-child(2)")
const btnSlide3 = document.querySelector("#slide-navegation-container div:nth-child(3)")
const btnSlide4 = document.querySelector("#slide-navegation-container div:nth-child(4)")

const home1 = document.querySelector("main .home:nth-child(1)")
const home2 = document.querySelector("main .home:nth-child(2)")
const home3 = document.querySelector("main .home:nth-child(3)")
const home4 = document.querySelector("main .home:nth-child(4)")


function slideActivated1() {
    home1.classList.add('content-activated')
    home2.classList.remove('content-activated')
    home3.classList.remove('content-activated')
    home4.classList.remove('content-activated')

    btnSlide1.classList.add('slide-activated')
    btnSlide2.classList.remove('slide-activated')
    btnSlide3.classList.remove('slide-activated')
    btnSlide4.classList.remove('slide-activated')
    
}

function slideActivated2() {
    home2.classList.add('content-activated')
    home1.classList.remove('content-activated')
    home3.classList.remove('content-activated')
    home4.classList.remove('content-activated')

    btnSlide2.classList.add('slide-activated')
    btnSlide1.classList.remove('slide-activated')
    btnSlide3.classList.remove('slide-activated')
    btnSlide4.classList.remove('slide-activated')
}

function slideActivated3() {
    home3.classList.add('content-activated')
    home1.classList.remove('content-activated')
    home2.classList.remove('content-activated')
    home4.classList.remove('content-activated')

    btnSlide3.classList.add('slide-activated')
    btnSlide1.classList.remove('slide-activated')
    btnSlide2.classList.remove('slide-activated')
    btnSlide4.classList.remove('slide-activated')
}

function slideActivated4() {
    home4.classList.add('content-activated')
    home2.classList.remove('content-activated')
    home3.classList.remove('content-activated')
    home1.classList.remove('content-activated')

    btnSlide4.classList.add('slide-activated')
    btnSlide2.classList.remove('slide-activated')
    btnSlide3.classList.remove('slide-activated')
    btnSlide1.classList.remove('slide-activated')
}


btnSlide1.addEventListener("click", () => {
    slideActivated1()
})
btnSlide2.addEventListener("click", () => {
    slideActivated2()
})
btnSlide3.addEventListener("click", () => {
    slideActivated3()
})
btnSlide4.addEventListener("click", () => {
    slideActivated4()
})
