const fsRange = document.querySelector('#font-size-control');
const textUp = document.querySelector('#text');

fsRange.addEventListener('input', () => {
    textUp.style.fontSize = `${fsRange.value}px`;
});