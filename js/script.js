const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target.classList)
        if (entry.target.classList[0] == "slideinR")
        entry.target.classList.toggle("slideR", entry.isIntersecting);
        else
        entry.target.classList.toggle("slide", entry.isIntersecting);
    });
};
// taken from https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 100 }; 

elements = document.querySelectorAll('.slidein');
elements.forEach(el => {
    observer.observe(el, options);
})

elements = document.querySelectorAll('.slideinR');
elements.forEach(el => {
    observer.observe(el, options);
})

window.addEventListener('scroll', function() {
    const scrollImage = document.getElementById('logo');
    if (scrollImage != null) {
        const scrollPosition = window.scrollY;

        const maxHeight = 500;
        const scrollThreshold = 1000;
    
        let translateY = Math.min(scrollPosition, scrollThreshold) * (maxHeight / scrollThreshold);
        
        scrollImage.style.transform = `translateY(${translateY}px)`;
    }
});