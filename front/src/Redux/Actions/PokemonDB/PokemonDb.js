import { useFirebaseApp, useFirestoreCollection } from 'reactfire';
import 'firebase/firestore';

// Retrive TypePhrase data from firestore
export function getPokemonDB() {
    return this.firestore.collection('PokemonDB').snapshotChanges();
}

// Store TypePhrase data in firestore
export function createTypePhrase(TypePhrase){
  console.log("entre",TypePhrase);
  return this.firestore.collection('PokemonDB').add(TypePhrase);
}

// Delete a record
export function deleteTypePhrase(TypePhraseId){
  this.firestore.doc('PokemonDB/' + TypePhraseId).delete();
}

// Update TypePhrase data
export function updateTypePhrase(TypePhrase){
  delete TypePhrase.id;
  this.firestore.doc('PokemonDB/' + TypePhrase.id).update(TypePhrase);
}