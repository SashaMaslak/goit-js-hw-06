const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector('[data-action=decrement]');
const counterValue = document.querySelector('#value');
let value = 0;
const counterStep = 1;
console.log(incrementBtn);
console.log(decrementBtn);
console.log(counterValue);

const increment = () => {
   value += 1;
   counterValue.textContent = value;
};



const decrement = () => {
   value -= 1;
   counterValue.textContent = value;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
