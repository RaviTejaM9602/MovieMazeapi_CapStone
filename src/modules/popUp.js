const commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qdmdFHstOSTgqs8wmesu/comments';
const getMovieComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);
  return response.json();
};

const commentPopup = document.querySelector('.comment-popup');
const getTotalComments = async (movieId) => {
  const result = await getMovieComment(movieId)
    .then((comment) => (!comment.error ? comment.length : 0))
    .catch(() => 0);
  return result;
};

const updateCommentCounter = (movieId) => {
  getTotalComments(movieId).then((totalComment) => {
    commentPopup.querySelector('.total-comments').innerHTML = totalComment;
  });
};

const commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qdmdFHstOSTgqs8wmesu/comments';
const movieApi = 'https://api.tvmaze.com/shows';

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentApiEndpoint, params);
  return response;
};

const getMovieData = async (movieId) => {
  const response = await get(`${movieApi}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  commentPopup.querySelector('.comments-box').innerHTML = data;
};

const showComments = (movieId) => {
  getMovieComment(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li class="comments-list">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('No comment posted yet.');
    }
  });
};

const closeCommentPopup = () => {
  document.querySelector('#close').addEventListener('click', () => {
    commentPopup.style.display = 'none';
    commentPopup.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showCommentPopup = async (movieId) => {
  await getMovieData(movieId).then((data) => {
    commentPopup.innerHTML = `<div class="popup">
    <button id="close">&times;</button>
    <div class="popUp-container">
      <div class="container">
        <div class="display"> 
           <div class="description">
            <img class="popup-image" src=${data.image.medium} alt="Movie image">
            <h3 class="movie-title">${data.name}</h3>
           </div>
          <div class="display-detail">
            <h3>More about the Movie</h3>
            <ul class="popup-list">
             <li>${data.summary}</li> 
             <li><strong>Date of Release:</strong> ${data.premiered}</li>
             <li><strong>Genres:</strong>${data.genres}</li>               
            </ul>  
           </div>
      </div>
    </div>
    <div class="comment-container">
         <div class="comment-display">
            <h3 class='counter'>Comments(<span class="total-comments">0</span>)</h3>
            <ul class="comments-box">
            </ul>
          </div>
      <div class="comment-box">
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

    updateCommentCounter(movieId);
    showComments(movieId);

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
        showComments(movieId);
        updateCommentCounter(movieId);
        form.reset();
      });
    });
  });
  commentPopup.style.display = 'block';
  closeCommentPopup();
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(e.target.id);
  }
});

export default { showCommentPopup, commentCounter };