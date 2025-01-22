document.addEventListener('DOMContentLoaded', function() {
    const welcomeSpan = document.getElementById('Welcome_span');
    const userFirstName = localStorage.getItem('userFirstName');

    if (userFirstName) {
        welcomeSpan.textContent = userFirstName;
    }
});