// Animation for header logo
window.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo img");
    
    logo.style.opacity = 0;
    logo.style.transform = "scale(0.8)";
    
    // Fade in and scale effect on logo
    setTimeout(() => {
        logo.style.transition = "opacity 1s, transform 1s";
        logo.style.opacity = 1;
        logo.style.transform = "scale(1)";
    }, 500);

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add some dynamic effects to the search input box
    const searchInput = document.querySelector("main input");
    searchInput.addEventListener("focus", () => {
        searchInput.style.borderColor = "#ffddc1"; // Change border color on focus
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.borderColor = "red"; // Revert border color when focus is lost
    });
});
