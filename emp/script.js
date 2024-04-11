const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate login process (replace with actual validation)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password');
  }
});

// Handle "New User" button click (add your logic here)
const newUserBtn = document.getElementById('new-user-btn');

newUserBtn.addEventListener('click', () => {
  // Redirect to a new user registration page or display a registration form
  alert('New User registration not implemented yet!');
});
