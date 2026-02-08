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
    "Always you, Nazeer ❤️ Happy Valentine’s to us ♾️";
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
