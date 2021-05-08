import db from '../firebase'; //detecta por defecto que el archivo a usar es index.js

const itemCollection = db.collection("productos");

export function getPosts() {
  return itemCollection.get()
    .then(snapshot => {
      return snapshot.docs.map(doc => doc.data())
    })
}

export function getPostById(idPost) {
  const itemById = itemCollection.where("id", "==", parseInt(idPost));
  return itemById.get()
    .then(snapshot => {
      return snapshot.docs.map(doc => doc.data())
    })
}

/////////////////////////
// LLAMADOS A FAKE API //
/////////////////////////

// function getPosts() {
//   return new Promise((resolve, reject) => {
//     fetch(`http://my-json-server.typicode.com/ArielMolho/mockjson/products`)
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err))
//   })
// }

// function getPostById(idPost) {
//   return new Promise((resolve, reject) => {
//     fetch(`http://my-json-server.typicode.com/ArielMolho/mockjson/products/${idPost}`)
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err))
//   })
// }

// module.exports = {
//   getPostById,
//   getPosts,
// }

/*
>> Consigna: conecta tu nueva ItemCollection de Google Firestore a tu ItemListContainer y ItemDetailContainer.
Si navegas a /item/:id, debe ocurrir una consulta de (1) documento. 

https://docs.google.com/presentation/d/1ncUKwUXDSCtunXEBCm4Wl8wC9k_-mu-XwatKoNJH7V4/edit#slide=id.gb19a8efb71_1_1297
*/