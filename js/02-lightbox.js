import { galleryItems } from './gallery-items.js';


const listItem = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");

  document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

  const lightbox = new SimpleLightbox(".gallery__link", {captionsData: 'alt', captionDelay: 250 });
