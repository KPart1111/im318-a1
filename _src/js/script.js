// declare!
let toggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

// menu toggle function
function toggleMenu() {
     menu.classList.toggle('show');
}
toggle.addEventListener('click',toggleMenu);

console.log('JS Running');