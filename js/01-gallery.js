import { galleryItems } from "./gallery-items.js";

const galleryList = document.createElement("ul");
galleryList.classList.add("gallery");
document.body.appendChild(galleryList);

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${source}" width="800" height="600">`
    );
    instance.show();
  }
});
