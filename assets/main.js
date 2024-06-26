// ================SHOW MENU===============
const navMenu = document.getElementById('nav-menu')
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
const navLink = document.querySelectorAll('.nav__Link')

const linkAction = () => {
    // const navMenu = document.getElementById('nav-menu')
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav link we remove the show-menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







// This is for typed script js
const typed = new Typed('.multiple-text',{
    strings: ['Software Frontend Engineer','Code Tutor','YouTuber','Web/U.I Designer','Tech Coach', 'Mentor','Content Creator','Multi-Entrepreneur'],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
 });




 

    // ========counter section========== 
    const countAnimation = () => {
        const clientsAnimation = document.getElementById('clients');
        const projectsAnimation = document.getElementById('projects');
    
        const obj = {
            cl: [0, 4],
            pr: [0, 25],
        };
    
        const projectsElement = document.getElementById('projects'); // Define the projects element
        const clientsElement = document.getElementById('clients');   // Define the clients element
    
        setInterval(() => {
            obj.cl[0] = obj.cl[0] < obj.cl[1] ? obj.cl[0] + 1 : obj.cl[1];
            obj.pr[0] = obj.pr[0] < obj.pr[1] ? obj.pr[0] + 1 : obj.pr[1];
    
            projectsElement.textContent = `${obj.pr[0]} +`; // Use backticks for template literals
            clientsElement.textContent = `${obj.cl[0]} +`;   // Use backticks for template literals
        }, 10);
    };
    
    window.addEventListener('load', countAnimation);
    




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
    }else{
        // serviceID - template - #form - publickey
        emailjs.sendForm('service_nqf13y9','template_gl7d22a','#contact-form','_E1clLC49o-k7JCMg')
            .then(() =>{
                // show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✅'

                // Remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED. . .', error)
            })

            // To clear the input field 
            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
    }

};

contactForm.addEventListener('submit', sendEmail);







// ==========SCROLL SECTIONS ACTIVE ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = curent.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)





 

// ==================SHOW SCROLL UP================
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}   
window.addEventListener('scroll', scrollUp)






// =============DARK LIGHT THEME=================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, we ask the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark theme / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


// ==================CHANGE BACKGROUND HEADER================
const scrollHeader = () => {
    const header = document.getElementById('header')
    //  when the scroll is greater than 50 viewpoint height, add the scroll-header class to the header tag 
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


// ================ SCROLL REVEAL ANIMATION ========================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //    reset: true  ANIMATION repeat
})

sr.reveal('.home__data, .projects__container, testimonial__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification__content, .services__card', {interval: 100})





