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
//   // Select dom items
// const menuBtn = 
//   document.querySelector(".menu-btn");

// const menuNav = 
//   document.querySelector("#portal");

// const navItems = 
//   document.querySelectorAll(".nav-item");

// // Set the initial state of the menu
// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);
// function toggleMenu() {
//     if (!showMenu) {
//         menuBtn.classList.add("close");
//         menuNav.classList.add("show");
//         navItems.forEach((item) =>
//             item.classList.add("show"));

//         // Reset the menu state
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove("close");
//         menuNav.classList.remove("show");
//         navItems.forEach((item) =>
//             item.classList.remove("show"));

//         // Reset the menu state
//         showMenu = false;
//     }
// }