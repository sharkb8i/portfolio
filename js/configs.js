/* TOGGLE MENU FN */
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  var banner = document.getElementById('banner');
  var nav = document.getElementById('navigation');
  banner.classList.toggle('active');
  nav.classList.toggle('active');
}

// Put the name on the logo
document.getElementById("logo_name").innerText = "</bruno>";
