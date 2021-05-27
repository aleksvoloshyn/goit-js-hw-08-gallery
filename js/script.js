import galleryItems from './gallery-items.js';

const galleryListEl = document.querySelector('ul.js-gallery');
const modalWindowEl = document.querySelector('.js-lightbox');
const modalWindowCloseBtn = document.querySelector(
  '[data-action = close-lightbox]',
);
const modalLightBoxOverlayEl = document.querySelector('.lightbox__overlay');
const modalLightBoxImageEl = document.querySelector('.lightbox__image');

function createPicturesMarkup(pics) {
  return pics
    .map(({ preview }) => {
      return `<li class="gallery__item">
        
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
          />
        </a>
      </li> `;
    })
    .join('');
}

//добавляем картинки в список
function addPictureElementsToList(item) {
  galleryListEl.insertAdjacentHTML('beforeend', createPicturesMarkup(item));
}
addPictureElementsToList(galleryItems);

galleryListEl.addEventListener('click', onImageGalleryClick);

function onImageGalleryClick(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== 'IMG') {
    return;
  }
  modalWindowEl.classList.toggle('is-open');
}
