const form = document.getElementById('checkoutForm');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitButton');
let isSubmitting = false;

// Async email validation mock
emailInput.addEventListener('input', async function () {
    // Simulate asynchronous validation
    await new Promise(resolve => setTimeout(resolve, 1000));
    const isValidEmail = ''/* Your email validation logic */;
    if (!isValidEmail) {
        emailInput.setCustomValidity('Invalid email');
    } else {
        emailInput.setCustomValidity('');
    }
});

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (isSubmitting) {
        return;
    }
    isSubmitting = true;
    submitButton.innerHTML = 'Submitting...';
    await new Promise(resolve => setTimeout(resolve, 1000));
    isSubmitting = false;
    submitButton.innerHTML = 'Submit';
});
