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


document.addEventListener('DOMContentLoaded', () => {
    showLinksByRol();
});

function showLinksByRol() {
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));
    console.log('user', userLogged);
    const comercialLink = document.getElementById('comercial-link');
    const logisticaLink = document.getElementById('logistica-link');
    if (userLogged) {
        const rol = userLogged.rol;
        if (rol === 'comercial') {
            comercialLink.classList.remove('hidden');
            logisticaLink.classList.add('hidden');
        } else if (rol === 'logistica') {
            comercialLink.classList.add('hidden');
            logisticaLink.classList.remove('hidden');
        }
        showLogoutButton();
    }
    else {
        comercialLink.classList.add('hidden');
        logisticaLink.classList.add('hidden');
        showLoginButton();
    }
}

function logout() {
    localStorage.removeItem('userLogged');
    document.getElementById('logout').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    window.location.href = './login.html';
}

function showLogoutButton() {
    document.getElementById('logout').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
}

function showLoginButton() {
    document.getElementById('logout').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}