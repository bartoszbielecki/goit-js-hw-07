import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");

    link.classList.add("gallery__item");
    link.href = item.original;
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    listItem.appendChild(link);
    gallery.appendChild(listItem);
  });

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
