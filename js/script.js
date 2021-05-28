import galleryItems from './gallery-items.js';

const galleryListEl = document.querySelector('ul.js-gallery');
const modalWindowEl = document.querySelector('.js-lightbox');
const modalWindowCloseBtn = document.querySelector(
  '[data-action = close-lightbox]',
);
const modalLightBoxOverlayEl = document.querySelector('.lightbox__overlay');
const modalLightBoxImageEl = document.querySelector('.lightbox__image');

// функция создание разметки по шаблону
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

/** Функция клика по превью картинки **/
function onImageGalleryClick(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== 'IMG') {
    return;
  }

  toggleClassOnModal(modalWindowEl);

  const galImageEl = ev.target;

  galleryItems.map((el, ind) => {
    if (galImageEl.src === el.preview) {
      setAtributesToImagesModal(el);
    }
  });
}

//функция подстановки атррибутов картинке в модальном окне
function setAtributesToImagesModal(img) {
  modalLightBoxImageEl.src = img.original;
  modalLightBoxImageEl.alt = img.description;
}

//Функция переключения класса is-open
function toggleClassOnModal(element) {
  element.classList.toggle('is-open');
}

//нажатие на close button
modalWindowCloseBtn.addEventListener('click', () => {
  modalWindowEl.classList.toggle('is-open');
  setAtributesToImagesModal('');
});
