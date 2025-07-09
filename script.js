document.addEventListener('DOMContentLoaded', function () {
  // Animations fadeIn pour les sections
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    section.style.animation = `fadeIn 1s ease-out ${index * 0.2}s forwards`;
  });

  // Animations fadeIn pour les compétences
  const skills = document.querySelectorAll('.skill');
  skills.forEach((skill, index) => {
    skill.style.animation = `fadeIn 1s ease-out ${1 + index * 0.1}s forwards`;
  });

  // Animations fadeIn pour les boutons
  const downloadBtns = document.querySelectorAll('.download-btn');
  downloadBtns.forEach((btn, index) => {
    btn.style.animation = `fadeIn 1s ease-out ${1.5 + index * 0.1}s forwards`;
  });
});

// FOND ÉTOILÉ STARFIELD
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
      speed: 0.2 + Math.random() * 0.4 // lent
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

