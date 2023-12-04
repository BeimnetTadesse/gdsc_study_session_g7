 
const counterElement = document.getElementById('counter');

let counterValue = 0;
 
function increaseCounter() {
    counterValue++;
    updateCounter();
}
function decreaseCounter() {
    counterValue--;
    updateCounter();
}
function resetCounter() {
    counterValue = 0;
    updateCounter();
}
function updateCounter() {
    counterElement.textContent = counterValue;
}
