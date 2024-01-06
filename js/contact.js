const inputs = document.querySelectorAll('.form-control, .form-select');

function markInvalidInput(input) {
    if (!input.validity.valid) {
        input.style.borderColor = '#cf3120';
        input.style.color = '#cf3120';
    } else {
        input.style.borderColor = ''; // Reset border color
        input.style.color = ''; // Reset text color
    }
}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        markInvalidInput(input);
    });
});
