const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate form data (add more validation as needed)
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Submit form data (e.g., send to server using AJAX)
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
});