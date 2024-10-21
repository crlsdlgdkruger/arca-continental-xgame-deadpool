function toggleMenuCollapseIcon() {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    if (menuToggle.checked) {
        hamburgerMenu.classList.add('hidden');
        closeMenu.classList.remove('hidden');
    } else {
        hamburgerMenu.classList.remove('hidden');
        closeMenu.classList.add('hidden');
    }
}