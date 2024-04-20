document.getElementById('createAccountForm').onsubmit = function(e) {
    e.preventDefault(); // Prevent the default form submission
    alert("Account creation is not implemented yet.");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Creating account for:', name, email, phone, username);
    alert('Account creation request sent for ' + name);
    window.location.href = 'P3.html'; // Redirect after the form action
};
