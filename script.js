document.addEventListener('DOMContentLoaded', function() {
    // Animation pour les sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animation = `fadeIn 1s ease-out ${index * 0.2}s forwards`;
    });

    // Animation pour les compétences
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animation = `fadeIn 1s ease-out ${1 + index * 0.1}s forwards`;
    });

    // Animation pour les boutons de téléchargement
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach((btn, index) => {
        btn.style.animation = `fadeIn 1s ease-out ${1.5 + index * 0.1}s forwards`;
    });
});
