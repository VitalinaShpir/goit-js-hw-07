import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "../simplelightbox-master/dist/simple-lightbox.esm.js";

console.log(galleryItems);


const listItem = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-caption="${description}" data-lightbox="gallery">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");

  document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

  document.addEventListener("DOMContentLoaded", function () {
    var lightbox = new SimpleLightbox("a[data-lightbox='gallery']", {captionsData: 'alt', captionDelay: 250 });


});
