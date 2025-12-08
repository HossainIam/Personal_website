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


// Highlight based on scroll position

const sections = document.querySelectorAll("section");          // Select all page sections
const navLinks = document.querySelectorAll(".nav-links a");     // Select all navigation links

window.addEventListener("scroll", () => {
    let current = "";                                            // Track which section is active

    const scrollPos = window.scrollY + 120;                      // Add offset for fixed header

    sections.forEach(section => {
        const top = section.offsetTop;                           // Section's top position
        const height = section.offsetHeight;                     // Section's height

        if (scrollPos >= top && scrollPos < top + height) {      // Check if we are inside the section
            current = section.getAttribute("id");                // Store active section ID
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");                         // Remove active class from all links

        if (link.getAttribute("href") === `#${current}`) {       // Match link to current section
            link.classList.add("active");                        // Add active class to highlight link
        }
    });
});

