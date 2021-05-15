import db from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

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
  orderCollection.add(post)
    .then(({id}) => {console.log(id)});
}

export function timeStamp(){
  return firebase.firestore.Timestamp.fromDate(new Date())
}