import db from '../firebase';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

const itemCollection = db.collection("productos");
const orderCollection = db.collection("orders");

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

export function getCollection(){
  return orderCollection;
}
export async function createOrder(post){
  orderCollection.add(post);
}


/*
//Esta función se pone en otro archivo para que sea más ordenado y luego se importa a este (refactoring)
export const getDocDataAndId = doc => {
  return {id: doc.id, ...doc.data()}
}

//Acá simplificamos la función que está arriba
export async function getPosts() {
  const docRef = await itemCollection.get()

  const posts = docRef.docs.map(getDocDataAndId)

  return posts;
}
*/