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
    const loginButton = document.getElementById('login_page').parentElement;
    const signUpButton = document.getElementById('sign-up_page').parentElement;

    if (welcomeSpan.textContent.trim() !== 'GUEST') {
        loginButton.style.display = 'none';
        signUpButton.style.display = 'none';
    }
});