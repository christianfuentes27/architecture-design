const menu = document.querySelector('.menu-bars');
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('li a');

menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

links.forEach(link => link.addEventListener('click', () => console.log(link)));