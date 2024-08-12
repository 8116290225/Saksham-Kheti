function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.querySelector('.toggle-btn:nth-child(1)');
    const registerBtn = document.querySelector('.toggle-btn:nth-child(2)');

    if (formType === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    } else if (formType === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        loginBtn.classList.remove('active');
        registerBtn.classList.add('active');
    }
}

function loginUser() {
    // Placeholder for login logic (e.g., send request to server)
    console.log('Login Form Submitted');
    return false; // Prevent form submission for demonstration
}

function registerUser() {
    // Placeholder for registration logic (e.g., send request to server)
    console.log('Registration Form Submitted');
    return false; // Prevent form submission for demonstration
}
