/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER FAVORITES ===============*/ 
let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    brealpoints:{
        768: {
            slidesPerView: 3,
        }
    }
  });


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`)
sr.reveal(`.home__title span:nth-child(1)`, {origin: 'left', opacity:1})
sr.reveal(`.home__title span:nth-child(3)`, {origin: 'right', opacity:1})
sr.reveal(`.home__tooltip, .home__button`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img, .model__tooltip`, {origin: 'right'})