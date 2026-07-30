const animated = document.querySelectorAll(
    ".card, .project, .working, .about"
);


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
});



animated.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});