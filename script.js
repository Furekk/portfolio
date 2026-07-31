// Scroll animations
const animated = document.querySelectorAll(
    ".card, .project, .working, .about"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

animated.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});

// Lightbox

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".code-gallery img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});