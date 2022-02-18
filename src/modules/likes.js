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

//  addLikes(10);

export const getLikes = async (id) => {
  const res = await fetch(requestURL);
  let storedLikes = await res.json();
  console.log(storedLikes);
  // for (const likes of storedLikes) {
  //  if (likes.item_id === id) {
  //   const MovieLikes = likes.likes;
  //   console.log(likes.likes)
  //    return MovieLikes;
}

// async function UpdateLikes(){
//  for (const movie of storedLikes) {
//    if (movie.item_id === id) {
//      const MovieLikes = movie.likes;
//     await getLikes(movie)
//    }
//  }
// }
getLikes(10);

// export const updateLikes = async (id, display)=>{

// }

// function testTotalLikes() {
//   const totLikes= [data.[else.target.id]

// }
// const getLikes = async (id) => await (await fetch(requestUrl)).json();

// const getLikesSerialized = async (ids) => {
//   for (const id of ids) {
//     const data = await getLikes(id);
//     console.log(data);
//   }
//   console.log('I`ll wait on you!');
// };

// for (const obj of data) {
//   if (obj.item_id === e.target.id) {
//     tot;
//   }
// }