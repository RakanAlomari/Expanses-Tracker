document.addEventListener('DOMContentLoaded', function() {
    const showPasswordToggle = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    showPasswordToggle.addEventListener('change', function() {
        if (showPasswordToggle.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    document.getElementById('logins').addEventListener('click', function(event) {
        event.preventDefault();

        var password = passwordInput.value;
        var username = document.getElementById('username').value;

        if (!username.trim() || !password.trim()) {
            document.getElementById('error-message').innerText = 'Please enter both username and password.';
            return;
        }

        var validPassword = validatePassword(password);

        if (!validPassword) {
            document.getElementById('error-message').innerText = 'Incorrect password. Please try again.';
            return;
        }

        window.location.href = 'success.html';
    });

    function validatePassword(password) {
        return password === 'password123';
    }

    document.getElementById('Create').addEventListener('click', function() {
        window.location.href = 'p2.html';
    });

    document.getElementById('Individuals').addEventListener('click', function() {
        window.location.href = 'p1.html';
    });
});
