




const users  = [
    { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

function validatelogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
}

const founduser = users.find(user => user.username === username && user.password === password);

if (foundUser) {
    alert('Login successful!');
} else {
    alert('Invalid username or password.');
}
return false;


