function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateElements);
destroyBtn.addEventListener('click', DestroyBoxes);

function DestroyBoxes() {
  inputValue.value = '';
  boxes.innerHTML = '';
}

function onCreateElements() {
  const amount = inputValue.value;
  return createBoxes(amount);
}

function createBoxes (amount) {
  for (let i = 0; i < amount; i++){
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;

    const startSize = 30;
    const stepSize = 10;
    
    if (i > 0) {
      const resSize = startSize + i * stepSize;
      newDiv.style.width = `${resSize}px`;
      newDiv.style.height = `${resSize}px`;
      
    } else {
      newDiv.style.width = `${startSize}px`;
      newDiv.style.height = `${startSize}px`;
    }
    boxes.append(newDiv);
  }
  return 
}

