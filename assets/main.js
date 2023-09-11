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
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () => {
//     // const navMenu = document.getElementById('nav-menu')
//     const navMenu = document.getElementById('#nav-menu')
//     // when we click on each nav link we remove the show-menu 
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.querySelector('#nav--menu'); // Updated to match the ID
    // when we click on each nav link we remove the show-menu 

    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));





// =============SWIPER POJECTS=============
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidePerView: 2,
            spaceBetween: -56,
        }
    }
});


// ====================SWIPER TESTIMONIAL ===============
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// ==========EMAIL JS =============== 
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');
    

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        // show message
        contactMessage.textContent = 'Please fill in all the input fields. ⚠️'
    }

};

contactForm.addEventListener('submit', sendEmail);



// ==========SCROLL SECTIONS ACTIVE ACTIVE LINK ===============

 

// ==================SHOW SCROLL UP================


// =============DARK LIGHT THEME=================


// ==================CHANGE BACKGROUND HEADER================

// ================ SCROLL REVEAL ANIMATION ========================








