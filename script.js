document.addEventListener('DOMContentLoaded', function () {
    // Animation fadeIn au chargement
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animation = `fadeIn 1s ease-out ${index * 0.2}s forwards`;
    });

    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animation = `fadeIn 1s ease-out ${1 + index * 0.1}s forwards`;
        skill.addEventListener('click', () => {
            alert(`Compétence : ${skill.textContent}`);
        });
    });

    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach((btn, index) => {
        btn.style.animation = `fadeIn 1s ease-out ${1.5 + index * 0.1}s forwards`;
    });

    // Animation au scroll
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    });

    // Effet machine à écrire sur le nom
    const titleText = "SAYADALI MADARBUKUS";
    let i = 0;
    function typeWriter() {
        if (i < titleText.length) {
            document.getElementById("typing-title").innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
