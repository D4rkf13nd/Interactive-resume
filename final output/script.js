document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the home section
    const homeTexts = ["Computer Engineering Student", "Cyclist", "Altar Server"];
    let homeTextIndex = 0;
    let homeCharIndex = 0;
    const typingSpeed = 100; // Adjust typing speed here
    const typingTextElement = document.getElementById('typing-text');

    function typeHomeText() {
        if (homeCharIndex < homeTexts[homeTextIndex].length) {
            typingTextElement.textContent += homeTexts[homeTextIndex].charAt(homeCharIndex);
            homeCharIndex++;
            setTimeout(typeHomeText, typingSpeed);
        } else {
            setTimeout(() => {
                typingTextElement.textContent = '';
                homeCharIndex = 0;
                homeTextIndex = (homeTextIndex + 1) % homeTexts.length; // Cycle through texts
                typeHomeText();
            }, 2000); // Adjust delay before restarting typing effect
        }
    }

    typeHomeText();

    // Typing effect for the about section
    const aboutText = "Dedicated learner with a foundational understanding of programming, web development, and hardware concepts. Experienced with CSS, HTML, Java, and JavaScript, and building knowledge in embedded systems and basic circuit design. Eager to enhance technical skills through hands-on projects, teamwork, and applying engineering principles in practical scenarios. Seeking opportunities to contribute to innovative projects while continuing to learn and grow.";
    let aboutCharIndex = 0;
    const aboutTypingTextElement = document.getElementById('about-typing-text');

    function typeAboutText() {
        if (aboutCharIndex < aboutText.length) {
            aboutTypingTextElement.textContent += aboutText.charAt(aboutCharIndex);
            aboutCharIndex++;
            setTimeout(typeAboutText, typingSpeed);
        }
    }

    typeAboutText();

    // Smooth scrolling for header links
    const headerLinks = document.querySelectorAll('.main-header nav ul li a, .vertical-sidebar nav ul li a');
    const mainHeader = document.querySelector('.main-header');
    const verticalSidebar = document.querySelector('.vertical-sidebar');
    headerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Hide the main header and show the vertical sidebar when navigating to About or Skills sections
            if (targetId === 'about' || targetId === 'skills') {
                mainHeader.classList.add('hidden');
                verticalSidebar.classList.remove('hidden');
                verticalSidebar.classList.add('visible');
            } else {
                mainHeader.classList.remove('hidden');
                verticalSidebar.classList.remove('visible');
                verticalSidebar.classList.add('hidden');
            }
        });
    });

    // Tooltip positioning
    const icons = document.querySelectorAll('.vertical-sidebar nav ul li a img');
    icons.forEach(icon => {
        icon.addEventListener('mousemove', function(event) {
            const tooltip = this.nextElementSibling;
            tooltip.style.left = `${event.clientX + 10}px`;
            tooltip.style.top = `${event.clientY + 10}px`;
        });
        icon.addEventListener('mouseenter', function() {
            const tooltip = this.nextElementSibling;
            tooltip.style.visibility = 'visible';
        });
        icon.addEventListener('mouseleave', function() {
            const tooltip = this.nextElementSibling;
            tooltip.style.visibility = 'hidden';
        });
    });
});

const gifList = ["pencil.gif", "video.gif", "camera.gif"];
    let gifIndex = 0;
    
    setInterval(() => {
        gifIndex = (gifIndex + 1) % gifList.length;
        document.getElementById("changing-gif").src = gifList[gifIndex];
    }, 3000); // Adjust time between gif changes here

    