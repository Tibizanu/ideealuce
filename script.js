const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const toggleMenu = () => {
  navLinks.classList.toggle('open');
};

menuToggle?.addEventListener('click', toggleMenu);
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 40);
});
