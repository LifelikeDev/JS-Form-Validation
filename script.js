const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const userLabel = document.querySelector('input.user-label');
const passLabel = document.querySelector('input.pass-label');
const feedUser = document.querySelector('.feed-user');
const feedPass = document.querySelector('.feed-pass');

form.addEventListener('submit', e => {
    
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const usernamePatt = /^[a-zA-Z]{5,8}$/;
    const passwordPatt = /^[a-zA-Z0-9]{6,10}$/;

    if(usernamePatt.test(username)) {
        feedUser.textContent =  'valid username';
        feedUser.setAttribute('class', 'inputValid');     
    } else {
        feedUser.textContent = 'invalid username';
        feedUser.setAttribute('class', 'inputInvalid');
    }

    if(passwordPatt.test(password)) {
        feedPass.textContent =  'valid password';
        feedPass.setAttribute('class', 'inputValid');   
    } else {
        feedPass.textContent = 'invalid password';
        feedPass.setAttribute('class', 'inputInvalid');
    }
});