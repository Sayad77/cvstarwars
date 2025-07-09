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
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 400;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            speed: 0.5 + Math.random() * 0.5 // 🌌 Plus lent
        });
    }
}
createStars();

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFE81F';

    for (let star of stars) {
        star.z -= star.speed;

        if (star.z <= 0) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
            star.z = canvas.width;
        }

        const k = 128 / star.z;
        const x = (star.x - canvas.width / 2) * k + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * k + canvas.height / 2;

        const size = (1 - star.z / canvas.width) * 1.5;

        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    requestAnimationFrame(drawStars);
}

drawStars();

