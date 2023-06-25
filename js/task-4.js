const incButton = document.querySelector('[data-action="increment"]');
const decButton = document.querySelector('[data-action="decrement"]');
const countVl = document.getElementById("value");
let counterValue = 0;

function counterUp() {
    countVl.textContent = counterValue;
}
incButton.addEventListener("click", () => {
    counterValue++;
    counterUp();
});
decButton.addEventListener("click", () => {
    counterValue--;
    counterUp();
});