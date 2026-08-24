/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= TYPING ANIMATION ================= */

const typing =
    document.getElementById("typing");


const roles = [

    "Aspiring Data Analyst",

    "BCA Student",

    "Problem Solver",

    "Future Data Professional"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeRole() {

    const current =
        roles[roleIndex];


    if (!deleting) {

        typing.textContent =
            current.slice(
                0,
                charIndex++
            );


        if (
            charIndex >
            current.length
        ) {

            deleting = true;

            setTimeout(
                typeRole,
                1400
            );

            return;
        }

    } else {

        typing.textContent =
            current.slice(
                0,
                charIndex--
            );


        if (charIndex < 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

            charIndex = 0;

        }

    }


    setTimeout(

        typeRole,

        deleting
            ? 45
            : 85

    );

}


typeRole();


/* ================= SCROLL REVEAL ================= */

const revealItems =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("show");


                    revealObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach(item => {

    revealObserver.observe(item);

});


/* ================= CURSOR FOLLOWER ================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


const cursorRing =
    document.querySelector(
        ".cursor-ring"
    );


const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


let mouseX =
    window.innerWidth / 2;


let mouseY =
    window.innerHeight / 2;


let ringX = mouseX;

let ringY = mouseY;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;


        cursorGlow.style.left =
            `${mouseX}px`;

        cursorGlow.style.top =
            `${mouseY}px`;

    }
);


function animateCursor() {

    ringX +=
        (mouseX - ringX)
        * 0.14;


    ringY +=
        (mouseY - ringY)
        * 0.14;


    cursorRing.style.left =
        `${ringX}px`;


    cursorRing.style.top =
        `${ringY}px`;


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* ================= CURSOR HOVER ================= */

document.querySelectorAll(

    "a, button, .skill-card, .project-card"

).forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorRing.classList.add(
                "hover"
            );

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            cursorRing.classList.remove(
                "hover"
            );

        }
    );

});


/* ================= MOUSE PARTICLE ================= */

const particle =
    document.createElement("div");


particle.className =
    "mouse-particle";


document.body.appendChild(
    particle
);


const particleStyle =
    document.createElement(
        "style"
    );


particleStyle.textContent = `

.mouse-particle {

    position: fixed;

    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: #06c8e8;

    box-shadow:
        0 0 14px #06c8e8;

    pointer-events: none;

    z-index: 9998;

    transform:
        translate(-50%, -50%);

    opacity: 0;

}

`;


document.head.appendChild(
    particleStyle
);


let particleX = mouseX;

let particleY = mouseY;


document.addEventListener(
    "mousemove",
    () => {

        particle.style.opacity =
            "1";

    }
);


function animateParticle() {

    particleX +=
        (mouseX - particleX)
        * 0.055;


    particleY +=
        (mouseY - particleY)
        * 0.055;


    particle.style.left =
        `${particleX}px`;


    particle.style.top =
        `${particleY}px`;


    requestAnimationFrame(
        animateParticle
    );

}


animateParticle();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "#nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                if (
                    window.scrollY >=
                    section.offsetTop - 180
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.toggle(

                    "active",

                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`

                );

            }
        );

    }
);


/* ================= HERO PARALLAX ================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            !heroVisual ||
            window.innerWidth <= 800
        ) {

            return;

        }


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 10;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 10;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);