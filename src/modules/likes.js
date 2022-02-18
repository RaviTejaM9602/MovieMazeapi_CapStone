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

const getLikes = async () => {
  const res = await fetch(requestURL);
  const data = await res.json();
  //  const arr = data.json()
  console.log(data);
};

getLikes();

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