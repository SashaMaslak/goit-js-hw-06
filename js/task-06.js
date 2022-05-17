const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
   const countValueLength = event.currentTarget.value.length;
   const countDataLength = Number(inputEl.dataset.length);
   
   if (countValueLength === countDataLength) {
      if (inputEl.classList.contains('invalid')) {
         inputEl.classList.replace('invalid', 'valid');
         return;
      }
      inputEl.classList.add('valid');
   }
   else {
      inputEl.classList.add('invalid');
   };
};
