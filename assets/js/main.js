/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// VIEW MORE BUTTON

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-grid a');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    let isShowingMore = false;

    // Initially show only the first 6 images
    images.forEach((image, index) => {
        if (index >= 6) {
            image.style.display = 'none';
        }
    });

    viewMoreBtn.addEventListener('click', () => {
        if (isShowingMore) {

            // Hide extra images
            images.forEach((image, index) => {
                if (index >= 6) {
                    image.style.display = 'none';
                }
            });
            viewMoreBtn.textContent = 'Show More';
            alert('View less images?');
        } else {
            // Show all images
            images.forEach((image) => {
                image.style.display = 'block';
            });
            viewMoreBtn.textContent = 'Show Less';
        }
        isShowingMore = !isShowingMore;
    });
});

//Dropdown functionality

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!toggle.parentNode.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
});
