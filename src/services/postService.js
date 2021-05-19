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

export function createOrder(buyer, items, total) {
  return orderCollection
    .add({
      buyer: buyer,
      items: items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    })
    .then(function (oderId) {
      return oderId.id;
    })
    .catch(function (error) {
      return error;
    });
  }  