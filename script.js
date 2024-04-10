document.addEventListener("DOMContentLoaded", function() {
    // Toggle Dark/Light Mode
    const body = document.body;
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");
    // Get all elements with the "social-icon" class
    const githubIcons = document.getElementById("github-icon");
    const linkedinIcons = document.getElementById("linkedin-icon");

    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            lightIcon.style.display = "none";
            darkIcon.style.display = "inline";
            document.getElementById("home").classList.remove("jumbotron-dark");
            document.getElementById("home").classList.add("jumbotron-light");
            document.getElementById("home").style.color = "#212529"; // Text color in light mode
            document.getElementById("skills").style.backgroundColor = "#f8f9fa"; // Background color in light mode
            // Switch social icons to light mode
            githubIcons.src = githubIcons.getAttribute('data-light');
            linkedinIcons.src = linkedinIcons.getAttribute('data-light');
        } else {
            body.classList.add("dark-mode");
            lightIcon.style.display = "inline";
            darkIcon.style.display = "none";
            document.getElementById("home").classList.remove("jumbotron-light");
            document.getElementById("home").classList.add("jumbotron-dark");
            document.getElementById("home").style.color = "#dbdbdb"; // Text color in dark mode
            document.getElementById("skills").style.backgroundColor = "#181818"; // Background color in dark mode
            // Switch social icons to dark mode
            githubIcons.src = githubIcons.getAttribute('data-dark');
            linkedinIcons.src = linkedinIcons.getAttribute('data-dark');
        }
    });

    // Smooth Scroll to Sections
    document.querySelectorAll("a.nav-link").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("id").replace("-link", "");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});
