const loginContainer = document.querySelector('#login');
const signUpContainer = document.querySelector('#signup');

document.querySelectorAll('.change-login-mode a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const showSignUp = link.getAttribute('href') === '#signup';

        loginContainer.hidden = showSignUp;
        signUpContainer.hidden = !showSignUp;
    });
});

const toggler = document.getElementById('toggler');

const toggleTheme = () => {
    toggler.classList.toggle('active');
    document.body.classList.toggle('dark');
    const isDarkMode = toggler.classList.contains('active');
    toggler.setAttribute('aria-pressed', String(isDarkMode));
    toggler.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
};

toggler.addEventListener('click', toggleTheme);
toggler.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleTheme();
    }
});