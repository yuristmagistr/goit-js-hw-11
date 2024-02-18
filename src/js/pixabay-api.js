// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// // Описаний у документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

// import { renderTicker } from './render-functions';


// export function fetchImages(searchQuery) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const KEY = '?key=42435479-889f1388d96929484f40a1796';
//   const Q = `&q=${searchQuery}`;
//   const IMAGE_TYPE = '&image_type=photo';
//   const ORIENTATION = '&orientation=horizontal';
//   const SAFESEARCH = '&safesearch=true';
//   const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

//   return fetch(url)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     })
//     .then(data => {
//       if (data && data.hits && data.hits.length > 0) {
//         renderTicker(data);
//       } else {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching <br/>your search query. Please try again!',
//           position: 'topRight',
//         });
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     })
//     .finally(() => {
//       loader.style.display = 'none';
//     });
// }

