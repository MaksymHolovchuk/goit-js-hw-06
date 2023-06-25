const input = document.querySelector('#validation-input');
input.addEventListener("blur", () => {
    const inpLength = Number(input.getAttribute('data-length'));
    const actualLength = input.value.length;

    if (actualLength === inpLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});