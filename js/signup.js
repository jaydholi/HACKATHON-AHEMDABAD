document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;

  if (email && password) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Account created successfully!');
      window.location.href = 'login.html';
  } else {
      alert('Please fill in all fields.');
  }
});
