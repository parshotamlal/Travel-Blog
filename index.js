document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form validation
    const form = document.querySelector(".contact form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = form.querySelector("input[placeholder='Enter your name']").value;
        const email = form.querySelector("input[placeholder='Abc@email.com']").value;
        const message = form.querySelector("input[type='text']").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for reaching out! I'll get back to you soon.");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Dark mode toggle
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Toggle Dark Mode";
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "20px";
    darkModeButton.style.right = "20px";
    darkModeButton.style.padding = "10px";
    darkModeButton.style.background = "#333";
    darkModeButton.style.color = "white";
    darkModeButton.style.border = "none";
    darkModeButton.style.cursor = "pointer";
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Dark mode styles
    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background: #222;
            color: white;
        }
        .dark-mode .blogs, .dark-mode #about-me, .dark-mode #contact {
            background: #333;
            color: white;
        }
        .dark-mode nav {
            background: #111;
        }
        .dark-mode .footer {
            background: #111;
        }
    `;
    document.head.appendChild(darkModeStyle);
});
