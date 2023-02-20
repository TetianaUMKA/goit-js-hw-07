// Створити галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.

import { galleryItems } from './gallery-items.js';

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
    galleryImg.setAttribute('data-sourse', item.original);
    galleryImg.alt = item.description;
    
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    return galleryItem;  
});

galleryContainerEl.append(...items);

console.log(galleryContainerEl);
console.log(galleryItems);

document.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imgSelected = event.target.getAttribute('data-sourse');
    const instance = basicLightbox.create(
        `<img src="${imgSelected}" width="800" height="600">`,
        {
            onShow: () => {
                document.addEventListener('keydown', closeModal);
            },
            onClose: () => {
                document.removeEventListener('keydown', closeModal);
            },
        }
    );
    instance.show();

    function closeModal(event) {
        if (event.key === 'Escape') {
            instance.close();
        }
    }
});
