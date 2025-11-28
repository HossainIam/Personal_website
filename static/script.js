document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
}); //code turns all in-page anchor links into smooth-scrolling links.

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

console.log("JS loaded!"); // to check the jav script loading or not
