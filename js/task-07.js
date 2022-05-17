const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
inputEl.addEventListener('input', onInputChange)

textEl.style.fontSize = `${inputEl.value}px`;

function onInputChange(event) {
   console.log(event.currentTarget.value);
   textEl.style.fontSize = `${event.currentTarget.value}px`;
}