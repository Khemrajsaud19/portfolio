
const galleryItems = document.querySelectorAll(".gallery-item");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const closeBtn = document.getElementById("close");

galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = item.src;

    });

});



closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

// Click Outside Image

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});


const sections = document.querySelectorAll(
    ".hero, .about, .gallery, .contact"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    },

    {
        threshold: 0.15,
    }

);

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(50px)";

    section.style.transition =
        "all 0.8s ease";

    observer.observe(section);

});



window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,255,179,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


const heroTitle =
    document.querySelector(".hero-content h1");

const text = "Khemraj Saud";

heroTitle.innerHTML = "";

let i = 0;

function typeText() {

    if (i < text.length) {

        heroTitle.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeText, 120);

    }

}

window.onload = typeText;



document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



console.log(
    "Khemraj  ULTRA PREMIUM PORTFOLIO LOADED"
);