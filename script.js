let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide++;
  slides[currentSlide].classList.add("active");
}

function moveBtn() {
  const btn = document.getElementById("angryBtn");
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 160 - 80;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function finalYes() {
  document.getElementById("finalText").innerHTML =
  "I love you Nazeer ❤️ Happy Valentine’s to us baby 💕";
startConfetti();
}

/* CONFETTI CODE */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function startConfetti() {
  confettiPieces = [];
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 5,
      color: ["#ff4d6d", "#ffc2d1", "#ffd6e0"][Math.floor(Math.random() * 3)]
    });
  }
  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
  });

  confettiPieces = confettiPieces.filter(p => p.y < canvas.height);

  if (confettiPieces.length > 0) {
    requestAnimationFrame(drawConfetti);
  }
}
}

/* Floating hearts */
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 600);
