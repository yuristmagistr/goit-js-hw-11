// import { fetchImages } from './js/pixabay-api';
// import { renderTicker } from './js/render-functions';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onCreateFormSubmit);

function onCreateFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.query.value;

  if (searchQuery.trim() === '') {
    return iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
  }

    
  fetchImages(searchQuery);
  event.target.reset();
}


function fetchImages(searchQuery) {
  loader.style.display = 'inline-block';

  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '?key=42435479-889f1388d96929484f40a1796';
  const Q = `&q=${searchQuery}`;
  const IMAGE_TYPE = '&image_type=photo';
  const ORIENTATION = '&orientation=horizontal';
  const SAFESEARCH = '&safesearch=true';
  const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data && data.hits && data.hits.length > 0) {
        renderTicker(data);
      } else {
        iziToast.error({
          message: 'Sorry, there are no images matching <br/>your search query. Please try again!',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      iziToast.error({
        message: 'Failed to fetch images. Please try again.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}





function renderTicker(data) {
  const markup = data.hits.map(templateImage).join('');
  gallery.innerHTML = markup;

  const galleryLinks = document.querySelectorAll('.gallery-link');
  galleryLinks.forEach(link => {
    link.setAttribute('href', link.querySelector('img').getAttribute('src'));
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}


    function templateImage({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) {
        return `<li class="gallery-item" >
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${likes}</li></ul>
      <ul>Views<li>${views}</li></ul>
      <ul>Comments<li>${comments}</li></ul>
      <ul>Downloads<li>${downloads}</li></ul>
    </div>
  </li>`;
    }

