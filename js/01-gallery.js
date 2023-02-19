// Створити галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.

import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

const items = galleryItems.map(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = item.preview;
    galleryImg.setAttribute('data-source', item.original);
    galleryImg.alt = item.description;
    
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    return galleryItem;  
});

galleryContainerEl.append(...items);

console.log(galleryContainerEl);

console.log(galleryItems);
