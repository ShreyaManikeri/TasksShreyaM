function toggleDarkMode() {
        document.body.classList.toggle("dark");
    }

    const roles = [
  "Backend Developer",
  "Problem Solving",
  "Java & Spring Boot",
  "Database Management",
  "AI/ML Integration",
  "JWT & Security"
];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 60 : 100);
    }

    typeEffect();