document.addEventListener('DOMContentLoaded', function() {
    const toggleViewBtn = document.getElementById('toggleView');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleText = document.querySelector('.toggle-text');
    
    // Alternar entre formularios
    toggleViewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (loginForm.style.display === 'none') {
            // Mostrar login
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            toggleViewBtn.textContent = 'REGISTRO';
            toggleText.style.display = 'inline'; // Mostrar texto
        } else {
            // Mostrar registro
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            toggleViewBtn.textContent = 'INICIAR SESIÓN';
            toggleText.style.display = 'none'; // Ocultar texto
        }
    });
    
    // Resto del código permanece igual...
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.elements.username.value;
        const password = this.elements.password.value;
        console.log('Login attempt:', username, password);
        alert(`Intento de login con usuario: ${username}`);
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.elements.reg_username.value;
        const email = this.elements.reg_email.value;
        const password = this.elements.reg_password.value;
        console.log('Register attempt:', username, email, password);
        alert(`Usuario registrado: ${username}`);
    });

    // En tu archivo main.js (login)
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.elements.username.value;
    const password = this.elements.password.value;
    
    // Validación básica (solo para demostración)
    if(username && password) {
        // Guardar estado de login en localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
        
        // Redirigir a la página AR
        window.location.href = "ar-viewer.html";
    } else {
        alert("Por favor ingrese usuario y contraseña válidos");
    }
});
});

