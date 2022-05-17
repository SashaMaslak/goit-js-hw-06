const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesElements = [];

const galleryElements = document.querySelector('.gallery');
galleryElements.style.listStyle = 'none';
galleryElements.style.margin = '0';
galleryElements.style.padding = '0';
galleryElements.style.display = 'flex';

for (let i = 0; i < images.length; i += 1) {
  const image = images[i];
  const galleryEl = document.createElement('li');
  galleryEl.style.marginRight = '15px';
  galleryEl.insertAdjacentHTML('beforeend',
    `<img src=${image.url} alt="${image.alt}" width="480px"/>`);
  
  imagesElements.push(galleryEl);
};



galleryElements.append(...imagesElements);

console.log(galleryElements);





// const imgElements = images.map(element => { 
//   const galleryEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = element.url;
// });

// images.forEach(function ({url, alt}) {
//   const galleryEl = document.createSelector('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   galleryElements.insertAdjacentHTML(beforeend, `<li><img scr=$()`);
// })

// ingredients.forEach(ingredient => {
//   console.log(ingredientsEl);
  
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');
//   ingredientsEl.appendChild(ingredientEl);
// })
