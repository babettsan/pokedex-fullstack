import { useFirebaseApp, useFirestoreCollection } from 'reactfire';
import 'firebase/firestore';

// Retrive TypePhrase data from firestore
export function getTypePhrases() {
    return this.firestore.collection('TypePhrases').snapshotChanges();
}

// Store TypePhrase data in firestore
export function createTypePhrase(TypePhrase){
  return this.firestore.collection('TypePhrases').add(TypePhrase);
}

// Delete a record
export function deleteTypePhrase(TypePhraseId){
  this.firestore.doc('TypePhrases/' + TypePhraseId).delete();
}

// Update TypePhrase data
export function updateTypePhrase(TypePhrase){
  delete TypePhrase.id;
  this.firestore.doc('TypePhrases/' + TypePhrase.id).update(TypePhrase);
}