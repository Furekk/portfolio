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
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".close");

const galleryImages = document.querySelectorAll(".code-gallery img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.classList.add("active");
    });
});

closeButton.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
});

lightbox.addEventListener("click", (event) => {
    if(event.target === lightbox){
        lightbox.classList.remove("active");
        lightboxImage.src = "";
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        lightbox.classList.remove("active");
        lightboxImage.src = "";
    }
});