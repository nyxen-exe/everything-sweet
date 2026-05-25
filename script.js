
const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
});




const fadeElements = document.querySelectorAll(
  "section, .menu-card, .gallery-card, .review-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});




const cards = document.querySelectorAll(
  ".menu-card, .gallery-card, .review-card"
);

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

  });

});




const emojis = ["🧁", "🎂", "🍰", "🍩", "🍪"];

function createFloatingEmoji() {

  const emoji = document.createElement("div");

  emoji.classList.add("floating-emoji");

  emoji.innerText =
    emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * window.innerWidth + "px";

  emoji.style.fontSize =
    Math.random() * 25 + 20 + "px";

  emoji.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 7000);

}

setInterval(createFloatingEmoji, 900);



const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", function (e) {

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();

    ripple.style.left =
      e.clientX - rect.left + "px";

    ripple.style.top =
      e.clientY - rect.top + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);

  });

});



const heroText = document.querySelector(".hero-content p");

const text =
  "Delicious Cakes & Sweet Treats Made With Love";

let index = 0;

heroText.innerHTML = "";

function typeText() {

  if (index < text.length) {

    heroText.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText, 50);

  }

}

typeText();




const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 5px 25px rgba(255, 79, 129, 0.4)";

    navbar.style.background =
      "rgba(255,255,255,0.97)";

  } else {

    navbar.style.boxShadow =
      "0 2px 10px rgba(0,0,0,0.08)";

  }

});
