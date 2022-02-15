// // import './style.css'

const List = document.querySelector('#movies');
const movies_no=10;

const fetchMovies = async ()=>{
  for (let i = 1; i <=100; i++) {
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
  const movieEl = document.createElement('img');
  movieEl.setAttribute("src", `${movie.image.medium}`);
  const pokeInnerHtml=`
  <img src>
  `
  movieEl.innerHTML=pokeInnerHtml;
  List.appendChild(movieEl)
  console.log(movieEl);
}

