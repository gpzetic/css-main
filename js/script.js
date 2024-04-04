const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target.classList)
        if (entry.target.classList[0] == "slideinR")
        entry.target.classList.toggle("slideR", entry.isIntersecting);
        else
        entry.target.classList.toggle("slide", entry.isIntersecting);
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 

elements = document.querySelectorAll('.slidein');
elements.forEach(el => {
    observer.observe(el, options);
})

elements = document.querySelectorAll('.slideinR');
elements.forEach(el => {
    observer.observe(el, options);
})