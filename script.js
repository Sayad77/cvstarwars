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

// Star Wars starfield animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width
        });
    }
}
createStars(800);

function drawStars() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFE81F";
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.z -= 2;
        if (star.z <= 0) {
            star.z = canvas.width;
        }
        let k = 128.0 / star.z;
        let x = star.x * k + canvas.width / 2;
        let y = star.y * k + canvas.height / 2;
        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            let size = (1 - star.z / canvas.width) * 2;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    requestAnimationFrame(drawStars);
}

drawStars();
