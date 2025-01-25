document.addEventListener('DOMContentLoaded', function() {
    const welcomeSpan = document.getElementById('Welcome_span');
    const userFirstName = localStorage.getItem('userFirstName');
    const loginButton = document.getElementById('login_page');
    const signUpButton = document.getElementById('sign-up_page');
    const logoutButton = document.getElementById('logout_button');
    const citizenPage = document.getElementById('citizen_page');

    if (userFirstName) {
        welcomeSpan.textContent = userFirstName;
        loginButton.style.display = 'none';
        signUpButton.style.display = 'none';
        logoutButton.style.display = 'block';
        citizenPage.style.display = 'block';
    }

    logoutButton.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'index.html'; // Redirect to homepage or login page
    });
});
