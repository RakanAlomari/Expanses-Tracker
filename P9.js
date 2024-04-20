document.getElementById('expenseForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Functionality for adding an expense
    addExpense();
};

function addExpense() {
    var fileInput = document.getElementById('fileUpload');
    if (fileInput.files.length > 0) {
        
        console.log('File to upload:', fileInput.files[0].name);
        // Redirecting to P3.html 
        window.location.href = 'P3.html';
    } else {
        alert('Please select a file to upload first.');
    }
}

document.getElementById('fileUpload').addEventListener('change', function() {
    console.log('Selected file:', this.files[0].name);
});
