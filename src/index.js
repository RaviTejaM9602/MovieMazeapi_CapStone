import "./style.css";
import showCommentPopup from './modules/popUp.js';


const List = document.querySelector('#movies');
const movies_no=10;


document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(1);
  }
});

const fetchMovies = async ()=>{
  for (let i = 1; i <=10; i++) {
    await getMovie(i);
  } 
};

 const getMovie = async (id) => {
   try{
  const url = `https://api.tvmaze.com/shows/${id}`;
  const res = await fetch(url);
   const movie = await res.json();
   console.log(movie);
   createMovieCard(movie);
   }catch (error){ 
     console.error(error);
   }
  }   

fetchMovies();

function createMovieCard(movie){
List.innerHTML += `<li class="movie">
<img class="mov-post" src=${movie.image.medium}>
<div class="mov-detail">
<p class="mov-name">${movie.name}</p>
<div class="likes">
<h4 class="total-likes">${movie.likes}</h4>
<i id=${movie.id} class="fas fa-heart"></i>
</div>
</div>
<button type="button" id=${movie.id} class="comments">Comments</button>
</li>`;
}
