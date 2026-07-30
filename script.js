const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold:.15
});


document.querySelectorAll(
".skill-card, .video-card, .detail-card, .work-style"
)
.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(30px)";
    element.style.transition="opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


// Smooth navbar scrolling

document.querySelectorAll("a[href^='#']")
.forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        document
        .querySelector(link.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});