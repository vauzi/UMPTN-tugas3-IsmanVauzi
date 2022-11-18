// buton toggle
const nav = document.getElementById('menu-nav');

function toggle() {
  nav.classList.toggle('-translate-x-full');
}

// scroll animation
window.addEventListener('scroll', navbar);

function navbar() {
  var nav = document.querySelectorAll('.navbar');

  for (var i = 0; i < nav.length; i++) {
    if (window.scrollY > 0) {
      nav[i].classList.remove('lg:bg-transparent');
    } else {
      nav[i].classList.add('lg:bg-transparent');
    }
  }
}
