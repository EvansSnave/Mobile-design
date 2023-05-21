let forms = document.querySelector('.contact__form');
let emails = document.getElementById('email');
let error = document.querySelector('.error-message');

forms.addEventListener('submit', (event) => {
  if (emails.value !== emails.value.toLowerCase()) {
    event.preventDefault();
    let emailLower = emails.value.toLowerCase();
    emails.value = emailLower;
    error.textContent = `Please enter your email in all lowercase. We've converted it to ${emailLower} for you.`;
  } else {
    error.textContent = '';
  }
});