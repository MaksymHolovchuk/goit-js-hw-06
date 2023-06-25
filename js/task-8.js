const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInp = form.elements.email;
    const passInp = form.elements.password;
    if (emailInp.value === '' || passInp.value === '') {
        alert('Всі поля повинні бути заповнені!');
        return;
    } 
        const formData = {
            email: emailInp.value, password: passInp.value
        };
        console.log(formData);
    form.reset();
});