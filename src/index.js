import "./style.css";
import showCommentPopup from './modules/popUp.js';


document.addEventListener('click', (e) => {
  if (e.target.matches('.comment-btn')) {
    showCommentPopup(1);
  }
});
