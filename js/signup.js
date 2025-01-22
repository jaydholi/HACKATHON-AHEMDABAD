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
      alert('Account created successfully!');
      window.location.href = 'login.html';
  } else {
      alert('Please fill in all fields.');
  }
});
