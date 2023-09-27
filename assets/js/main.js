

// Get references to DOM elements
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav');

// Function to open the menu
function openMenu() {
    navMenu.classList.add('show-menu');
}

// Function to close the menu
function closeMenu() {
    navMenu.classList.remove('show-menu');
}

// Event listener to open the menu when the toggle button is clicked
if (navToggle) {
    navToggle.addEventListener('click', openMenu);
}

// Event listener to close the menu when the close button is clicked
if (navClose) {
    navClose.addEventListener('click', closeMenu);
}
/*=============== REMOVE MENU MOBILE ================ */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById ('nav-menu')
    //when we click on each on each nav__link, we remove the show-menu

    navMenu.classList.remove('show-menu')

}
navLink.forEach( n => n.addEventListener('click', linkAction))




/* ========= SCROLL REVEAL ANIMATION =========== */
// main.js

// Initialize ScrollReveal with default options
const sr = ScrollReveal();

// Configure ScrollReveal for each section
sr.reveal('.section', {
  origin: 'bottom',    // Animation starting point
  distance: '20px',    // Distance to reveal the element
  duration: 2000,      // Animation duration (in milliseconds)
  delay: 200,          // Delay before the animation starts (in milliseconds)
  easing: 'cubic-bezier(0.5, 0, 0, 1)',  // Easing function
  reset: true,         // Reset the animation on exit
});

// You can adjust the options according to your preferences for each section




    













    /*==============CHANGE BACKGROUND HEADER============== */
    const blurHeader = () =>{
        const header = document.getElementById('header')

        this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.add('blur-header')
    }
    window.addEventListener('scroll', blurHeader)
    




    /*============== EMAIL JS =============*/
    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message')

          
         


    const  sendEmail = (e) =>{
        e.preventDefault()

        //serviceID  templateID  #form   -publicKey
        emailjs.sendForm('service_js2px8a', 'template_vl2q5sq', '#contact-form', 'iBhkAfot6u3v_qyr6')
        .then(() => {
            //show sent message

            contactMessage.textContent = 'Message sent successfully'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '' 
            }, 5000) 


            //clear input fields
            contactForm.reset()

        }, ()=> {
            //show error message
            contactMessage.textContent = 'Message not  sent '


        })
    }


    contactForm.addEventListener('submit', sendEmail)
    
    //=============== SHOW SCROLL IP=========================//
    const scrollUp = () =>{
        const scrollUp = document.getElementById ('scroll-up')
        //when the scroll is higher than 350 viewport height, add the show-scrall class 
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
    }
