import db from '../firebase';

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