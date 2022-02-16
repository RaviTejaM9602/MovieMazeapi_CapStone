const movieApi = 'https://api.tvmaze.com/shows';
const movieId = 'qdmdFHstOSTgqs8wmesu';

const getMovieData = async (movieId) => {
  const response = await fetch(`${movieApi}/${movieId}`);
  const data = await response.json();
  return data;
};

const commentPopup = document.querySelector('.comment-popup');

const showCommentPopup = async (movieId) => {
  await getMovieData(movieId).then((data) => {
    commentPopup.innerHTML = `<div class="popup">
    <button id="close">&times;</button>
    <div class="container">     
        <div class="display">
          <div class="description">
          <img src=${data.image.medium} alt="Movie image">
            <h3 class="movie-title">${data.name}</h3>
          </div>
          <div class="display-detail">
            <h3>More about the Movie</h3>
           <ul>
             <li>${data.summary}</li> 
             <li><strong>Date of Release:</strong> ${data.premiered}</li>
             <li><strong>Genres:</strong> ${data.genres}</li>               
           </ul>  
          </div>
        </div>
      <div class="comment-container">
        <div class="comment-display">
          <h3 class='counter'>Comments(<span class="total-comments">0</span>)</h3>
          <ul class="comments">
          </ul>
        </div>
        <div class="comment">
        <div class="add-comment">
          <h3>Add Comment</h3>
        </div>
        <form class="form">
          <input type="text" name="name" id="name" placeholder="Your name" required>
          <textarea name="description" id="description" cols="30" rows="10"
              placeholder="Your insight" required></textarea>
          <button id=${movieId} type="submit" class="submit-btn">Comment</button>
        </form>
      </div>
      </div>
    </div>
  </div>`;



    const form = commentPopup.querySelector('.form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.name.value;
      const description = form.elements.description.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: description,
      }).then(() => {
        form.reset();
      });
    });
  });
  commentPopup.style.display = 'block';
  };

let id = 1;
document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(id);
  }
});

export default showCommentPopup ;