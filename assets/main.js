// ================SHOW MENU===============
const navMenu = document.getElementById('nav--menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')

// ===================MENU SHOW=================
// ========Validate if constant exists============
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ===================MENU HIDDEN=================
// ========Validate if constant exists============        
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ================REMOVE MENU MOBILE=============
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav link we remove the show-menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// =============SWIPER POJECTS=============



// ====================SWIPER TESTIMONIAL ===============



// ===============EMAIL JS=====================