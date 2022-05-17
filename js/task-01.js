const itemsCategories = document.querySelectorAll('li.item');
console.log('Number of categories: ', itemsCategories.length);

itemsCategories.forEach(itemCategories => {
   console.log('Category: ',
      itemCategories.querySelector('h2').textContent);
   console.log('Elements: ',
      itemCategories.querySelector('ul').children.length);
});