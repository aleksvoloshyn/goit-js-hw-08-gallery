import galleryItems from './gallery-items.js';

//ul .gallery
const galleryListEl = document.querySelector('ul.gallery');

//modal window
const modalWindowEl = document.getElementsByClassName('lightbox');

//создаем разметку шаблонной строкой
// // <a class="gallery__link" href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg">

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

// li
const itemEl = document.querySelectorAll('.gallery__item');

function openModalWindow(el) {
  return el.forEach(element => {});
}
console.log(openModalWindow(itemEl));
