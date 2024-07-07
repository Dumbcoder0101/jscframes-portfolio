/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(e) {
  const navMenu = document.getElementById("nav-menu");

  // Check if the clicked link is not the dropdown toggle
  if (!e.target.classList.contains("dropdown-toggle")) {
    navMenu.classList.remove("show");
  }
}

navLink.forEach((n) => n.addEventListener("click", linkAction));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

// VIEW MORE BUTTON

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-grid a");
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  let isShowingMore = false;

  // Initially show only the first 6 images
  images.forEach((image, index) => {
    if (index >= 6) {
      image.style.display = "none";
    }
  });

  viewMoreBtn.addEventListener("click", () => {
    if (isShowingMore) {
      // Hide extra images
      images.forEach((image, index) => {
        // alert("View more images?");
        if (index >= 6) {
          image.style.display = "none";
        }
      });
      viewMoreBtn.textContent = "Show More";
      alert("View less images?");
    } else {
      // Show all images
      images.forEach((image) => {
        image.style.display = "block";
      });
      viewMoreBtn.textContent = "Show Less";
    }
    isShowingMore = !isShowingMore;
  });
});

//Dropdown functionality

document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle("show");
      });
  
      // Close dropdowns when clicking outside
      document.addEventListener("click", function (e) {
        if (!toggle.parentNode.contains(e.target)) {
          const dropdownMenu = toggle.nextElementSibling;
          dropdownMenu.classList.remove("show");
        }
      });
    });
  });
  
  //Dropdown arrow hover function
  
  document.addEventListener("DOMContentLoaded", () => {
    const workLink = document.getElementById("work-link");
    const dropdownArrow = document.getElementById("dropdown-arrow");
    const workDropdown = document.getElementById("work-dropdown");
  
    workLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
  
      if (workDropdown.style.display === "block") {
        workDropdown.style.display = "none";
        dropdownArrow.classList.remove("rotate-180"); // Remove rotation
      } else {
        workDropdown.style.display = "block";
        dropdownArrow.classList.add("rotate-180"); // Add rotation
      }
    });
  
    // Close the dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!workLink.contains(e.target) && !workDropdown.contains(e.target)) {
        workDropdown.style.display = "none";
        dropdownArrow.classList.remove("rotate-180"); // Remove rotation
      }
    });
  
    // Ensure dropdown is hidden on page load
    workDropdown.style.display = "none";
  });
  
//Back to top JS

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Progress bar functionality

window.onscroll = function() {
  const progressBar = document.getElementById('progressBar');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || window.innerHeight;
  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

  progressBar.style.width = scrollPercent + '%';
};