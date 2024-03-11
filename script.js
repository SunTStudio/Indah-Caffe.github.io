let text = document.getElementById("hero-text");
let daunTopLeft = document.getElementById("daun-top-left");
let daunBottomLeft = document.getElementById("daun-button-left");
let daunMidRight = document.getElementById("daun-mid-right");
let coffe = document.getElementById("coffe");
let bijiKopi = document.getElementById("biji-kopi");
let bijiKopiShadow = document.getElementById("biji-kopi-shadow");
let logoCoffe = document.getElementById("logo-coffe");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.opacity = -value * 0.5 + 100 + "%";
  text.style.marginTop = value * -0.05 + "rem";

  daunBottomLeft.style.opacity = -value * 0.5 + 100 + "%";
  daunBottomLeft.style.left = value * -0.05 + "%";

  daunTopLeft.style.opacity = -value * 0.5 + 100 + "%";
  daunTopLeft.style.left = value * -0.05 + "%";

  daunMidRight.style.opacity = -value * 0.5 + 100 + "%";
  daunMidRight.style.right = value * -0.05 + "%";

  coffe.style.opacity = -value * 0.5 + 100 + "%";
  coffe.style.right = -value * 0.1 + 5 + "%";

  bijiKopi.style.opacity = -value * 0.5 + 100 + "%";
  bijiKopi.style.top = -value * 0.1 + 30 + "%";

  bijiKopiShadow.style.opacity = -value * 1 + 80 + "%";
  logoCoffe.style.left = value * -0.05 + 10 + "%";
  logoCoffe.style.opacity = -value * 0.5 + 100 + "%";
});
