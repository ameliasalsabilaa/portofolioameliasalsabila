// Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector("#navnav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// type
var typed = new Typed(".skills", {
  strings: ["Frontend developer", "Android Developer", "Game Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  looped: true,
});

// theme
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "img/sun.png";
  } else {
    icon.src = "img/moon.png";
  }
};

// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbwNPL92LMzF5odIb_TXi78spnyQqljtpeQAIyfwhvst0JAil7UbbjFTeDv4WrmF1ToX/exec";
const form = document.forms["portfolio-contact"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert("Terima Kasih. Pesan anda telah terkirim!", response)})
    .catch((error) => console.error("Mohon Maaf. Website Error!", error.message));
});