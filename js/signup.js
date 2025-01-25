document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;

  if (firstName && lastName && phone && email && password) {
      localStorage.setItem('userFirstName', firstName);
      localStorage.setItem('userLastName', lastName);
      localStorage.setItem('userPhone', phone);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      showAccountCreatedModal();
  } else {
      showFillAllFieldsModal();
  }
});

function showAccountCreatedModal() {
    const accountCreatedModal = new bootstrap.Modal(document.getElementById('accountCreatedModal'));
    accountCreatedModal.show();

    document.getElementById('redirectToLogin').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}

function showFillAllFieldsModal() {
    const fillAllFieldsModal = new bootstrap.Modal(document.getElementById('fillAllFieldsModal'));
    fillAllFieldsModal.show();
}