const form = document.getElementById('form');
form.addEventListener('submit', formSubmitted);
function formSubmitted(e) {
    e.preventDefault();
    console.log(form['lastname'], form['password']);
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    if (firstname === "") {
        addErrto('firstname', 'First name cannot be empty')
    } else {
        removeERR('firstname');
    }

    if (lastname === "") {
        addErrto('lastname', 'Last name cannot be empty')
    } else {
        removeERR('lastname');
    }
    if (password === "") {
        addErrto('password', 'Password cannot be empty')
    } else {
        removeERR('password');
    }
    if (email === "") {
        addErrto('email', 'Email cannot be empty')
    } else if (!validateEmail(email)) {
        addErrto('email', 'Looks like this is not an email')
    } else {
        removeERR('email');
    }

}
function addErrto(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = formControl.querySelector('.small');
    small.innerHTML = message;
}
function removeERR(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    const small = formControl.querySelector('.small');
    small.innerHTML = '';
}
function validateEmail(email) {
    var actual = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return actual.test(String(email).toLowerCase());
}