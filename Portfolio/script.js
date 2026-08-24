/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


/* Close menu after clicking a link */

document.querySelectorAll("#nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-grid, .skill-card, .project-card, .timeline-item, .contact-inner"
    );


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});