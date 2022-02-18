import './style.css';
import showCommentPopup from './modules/popUp.js';
import { addLikes, fetchLikes } from './modules/likes.js';

const List = document.querySelector('#movies');

function createMovieCard(movie) {
  List.innerHTML += `<li class="movie">
<img class="mov-post" src=${movie.image.medium}>
<div class="mov-detail">
<p class="mov-name">${movie.name}</p>
<div class="likes">
<h4 class="total-likes" id="likes_${movie.id}">0</h4>
<i id=${movie.id} class="fas fa-heart"></i>
</div>
</div>
<button type="button" id=${movie.id} class="comment-btn">Comments</button>
</li>`;
}
const getMovie = async (id) => {
  try {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const res = await fetch(url);
    const movie = await res.json();
    createMovieCard(movie);
  } catch (error) {
    console.log('error', error);
  }
};

const moviesNo = 10;
const fetchMovies = () => {
  for (let i = 1; i <= moviesNo; i += 1) {
    getMovie(i);
    fetchLikes(i);
  }
};


fetchMovies();

document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(e.target.id);
  } else if (e.target.tagName === 'I') {
    addLikes(e.target.id);
    const likesNo = e.target.parentNode.querySelector('.total-likes');
    const newValue = +likesNo.innerHTML + 1;
    likesNo.innerHTML = newValue;
  }
});

