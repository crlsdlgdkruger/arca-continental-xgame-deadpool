document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const users = [{
        email: 'usercomercial@arcacontinental.com',
        password: 'usercomercial',
        rol: 'comercial',
    }, {
        email: 'userproduccion@arcacontinental.com',
        password: 'userproduccion',
        rol: 'produccion',
    }];

    const email = document.getElementById('useremail-input').value;
    const password = document.getElementById('password-input').value;
    const user = users.find(u => u.email === email && u.password === password);
    localStorage.setItem('userLogged', JSON.stringify(user));
    if (user) {
        if (user.rol === 'comercial') {
            window.location.href = './comercial.html';
            document.getElementById('produccion-link').classList.add('hidden');
        } else {
            window.location.href = './produccion.html';
            document.getElementById('comercial-link').classList.add('hidden');
        }
    } else {
        alert('Credenciales incorrectas');
    }


})