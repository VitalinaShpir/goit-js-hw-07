import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// const galleryList = document.querySelector('.gallery')
// console.log(galleryList);

const listItem = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
// console.log(listItem);

document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

const link = document.querySelectorAll(".gallery__link");
link.forEach((element) =>
  element.addEventListener("click", function (event) {
    event.preventDefault();
  })
);

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);


const images = document.querySelectorAll("img")
images.forEach(image => {
    image.addEventListener('click', e =>{
        lightbox.classList.add('active')
    })
})