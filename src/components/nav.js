// src/components/nav.js
const toggle = document.getElementById('navToggle')
const mobileMenu = document.getElementById('mobileMenu')

toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})