
// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }

});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuIcon.classList.replace("fa-xmark", "fa-bars");

    });

});


// =================================
// DARK / LIGHT THEME
// =================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeIcon.classList.replace("fa-moon", "fa-sun");

    } else {

        themeIcon.classList.replace("fa-sun", "fa-moon");

    }

});


// =================================
// PROJECT MODAL
// =================================

const projectButtons = document.querySelectorAll(".project-details");

const projectModal = document.getElementById("project-modal");

const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");


// Open project modal

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title = button.dataset.title;

        const description = button.dataset.description;

        modalTitle.textContent = title;

        modalDescription.textContent = description;

        projectModal.classList.add("active");

    });

});


// Close modal using close button

modalClose.addEventListener("click", () => {

    projectModal.classList.remove("active");

});


// Close modal by clicking outside

projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {

        projectModal.classList.remove("active");

    }

});


// Close modal using Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        projectModal.classList.remove("active");

    }

});


// =================================
// ACTIVE NAVIGATION LINK
// =================================

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
