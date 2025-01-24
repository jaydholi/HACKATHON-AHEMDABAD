document.addEventListener('DOMContentLoaded', function() {
    const welcomeSpan = document.getElementById('Welcome_span');
    const userFirstName = localStorage.getItem('userFirstName');

    if (userFirstName) {
        welcomeSpan.textContent = userFirstName;
    }
});

//  diable login and sign-up button if user is logged in 

document.addEventListener('DOMContentLoaded', function() {
    const welcomeSpan = document.getElementById('Welcome_span');
    const loginButton = document.querySelector('a[href="/pages/login.html"]').parentElement;
    const signUpButton = document.querySelector('a[href="/pages/sign-up.html"]').parentElement;

    if (welcomeSpan.textContent.trim() !== 'GUEST') {
        loginButton.style.display = 'none';
        signUpButton.style.display = 'none';
    }
});