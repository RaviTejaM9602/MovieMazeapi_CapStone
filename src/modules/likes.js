export const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qdmdFHstOSTgqs8wmesu/likes/';

export const addLikes = async (id) => {
  const response = await fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response;
};

export const getLikes = async (id) => {
  const res = await fetch(requestURL);
  const storedLikes = await res.json();
  for (const likes of storedLikes) {
    if (parseInt(likes.item_id, 10) === id) {
      const tmp = document.querySelector(`#likes_${id}`);
      tmp.innerHTML = likes.likes;
    }
  }
};

getLikes(10);
