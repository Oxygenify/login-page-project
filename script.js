const loginContainer = document.querySelector('#login-container');
const signUpContainer = document.querySelector('#sign-up-container');

document.querySelectorAll('.change-mode a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const showSignUp = link.getAttribute('href') === '#sign-up-container';

        loginContainer.hidden = showSignUp;
        signUpContainer.hidden = !showSignUp;
    });
});