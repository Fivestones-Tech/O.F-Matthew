// ================SHOW MENU===============
const navMenu = document.getElementById('.nav--menu');
const navClose = document.getElementById('.nav--close');
const navToggle = document.getElementById('.nav--toggle');

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

const LinkAction = () => {
    const navMenu = document.getElementById('nav')
}
// =============SWIPER POJECTS=============



// ====================SWIPER TESTIMONIAL ===============



// ===============EMAIL JS=====================