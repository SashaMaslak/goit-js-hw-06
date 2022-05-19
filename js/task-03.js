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

const galleryElements = document.querySelector('.gallery');
galleryElements.style.listStyle = 'none';
galleryElements.style.margin = '0';
galleryElements.style.padding = '0';
galleryElements.style.display = 'flex';

const imageMarkup = createImagesMarkup(images);
galleryElements.insertAdjacentHTML('beforeend', imageMarkup);
  
function createImagesMarkup(images) {
  return images
    .map(({ url, alt }) => {
    return `<li style="margin-right: 15px"><img src=${url} alt="${alt}" width="480px"></img></li>`;
    })
    .join('');
}
