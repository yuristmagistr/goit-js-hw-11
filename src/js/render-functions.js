// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// // Описаний у документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";


// export function renderTicker(data) {
//     const markup = data.hits.map(templateImage).join('');
//     gallery.innerHTML = markup;

//     const galleryLinks = document.querySelectorAll('.gallery-link');
//     galleryLinks.forEach(link => {
//         link.setAttribute('href', link.querySelector('img').getAttribute('src'));
//     });

//     const lightbox = new SimpleLightbox('.gallery a', {
//         captionsData: 'alt',
//         captionDelay: 250,
//     });

//     lightbox.refresh();


//     function templateImage({
//         largeImageURL,
//         webformatURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//     }) {
//         return `<li class="gallery-item" >
//     <a class="gallery-link" href="${largeImageURL}">
//       <img
//         class="gallery-image"
//         src="${webformatURL}"
//         alt="${tags}"
//       />
//     </a>
//     <div class="item-text">
//       <ul>Likes<li>${likes}</li></ul>
//       <ul>Views<li>${views}</li></ul>
//       <ul>Comments<li>${comments}</li></ul>
//       <ul>Downloads<li>${downloads}</li></ul>
//     </div>
//   </li>`;
//     }
// }
