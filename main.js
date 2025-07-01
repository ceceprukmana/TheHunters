const toggleMenu =document.getElementById('toogle-menu')
const navbar = document.getElementById('navbar-menu')

toggleMenu.addEventListener('click', function() {
    navbar.classList.toggle('show')
})