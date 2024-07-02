Document.getElementById('signup').addEventListener('submit', function(event) {
    Event.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    
    if (validateEmail(email) && validatePassword(password)) {
        Document.getElementById('message').textContent = 'Sign up successful!';
        Document.getElementById('message').style.color = 'green';
        
    } else {
       alert('wrong password');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

