document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  const Admin_email = "Admingov_mail@outlook.com";
  const Admin_password = "Admin123";
  if (email === Admin_email && password === Admin_password) {
      alert('Login successful!');
      window.location.href = '../pages/officerdashboard.html';
  }
  else if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      window.location.href = 'citizen.html';
  } else {
      alert('Invalid email or password.');
  }
});
