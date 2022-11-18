// buton toggle
const nav = document.getElementById('menu-nav');

function toggle() {
  nav.classList.toggle('-translate-x-44');
  nav.classList.toggle('opacity-0');
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

// slide scroll animation

// left
window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.slide-left');

  for (var i = 0; i < items.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = items[i].getBoundingClientRect().top;
    var elementPoint = 50;

    if (elementTop > windowHeight - elementPoint) {
      items[i].classList.add('-translate-x-16', 'opacity-0', 'duration-1000');
    } else {
      items[i].classList.remove('-translate-x-16', 'opacity-0');
    }
  }
});

// right
window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.slide-right');

  for (var i = 0; i < items.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = items[i].getBoundingClientRect().top;
    var elementPoint = 50;

    if (elementTop > windowHeight - elementPoint) {
      items[i].classList.add('translate-x-16', 'opacity-0', 'duration-1000');
    } else {
      items[i].classList.remove('translate-x-16', 'opacity-0');
    }
  }
});

window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.slide-top');

  for (var i = 0; i < items.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = items[i].getBoundingClientRect().top;
    var elementPoint = 50;

    if (elementTop > windowHeight - elementPoint) {
      items[i].classList.add('-translate-y-32', 'opacity-0', 'duration-1000');
    } else {
      items[i].classList.remove('-translate-y-32', 'opacity-0');
    }
  }
});

window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.slide-bottom');

  for (var i = 0; i < items.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = items[i].getBoundingClientRect().top;
    var elementPoint = 50;

    if (elementTop > windowHeight - elementPoint) {
      items[i].classList.add('translate-y-32', 'opacity-0', 'duration-1000');
    } else {
      items[i].classList.remove('translate-y-32', 'opacity-0');
    }
  }
});

window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.no-slide');

  for (var i = 0; i < items.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = items[i].getBoundingClientRect().top;
    var elementPoint = 50;

    if (elementTop > windowHeight - elementPoint) {
      items[i].classList.add('scale-75', 'opacity-0', 'duration-1000');
    } else {
      items[i].classList.remove('scale-75', 'opacity-0');
    }
  }
});
