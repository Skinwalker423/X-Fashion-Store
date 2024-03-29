// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import { Category } from "../../store/categories/categories.types";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvL8si3PcKoncEiQKmWpNG7HY19JS1sZE",
  authDomain: "x-fashion-c95bf.firebaseapp.com",
  projectId: "x-fashion-c95bf",
  storageBucket: "x-fashion-c95bf.appspot.com",
  messagingSenderId: "787374202043",
  appId: "1:787374202043:web:8b83f83474d04c24249d9e",
  measurementId: "G-BCE66SFZSY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
// const emailProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();


export const signOutUser = async() => signOut(auth);


export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const signInAuthUserWithEmailAndPassword = async(email: string, password: string) => {
    if(!email || !password){
      return;
    }
    return await signInWithEmailAndPassword(auth, email, password);
}

export const createAuthUserWithEmailAndPassword = async(email: string, password: string) => {
    if(!email || !password){
      return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
}


export const  onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
    if(!callback){
      return;
    }
    onAuthStateChanged(auth, callback)
}

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth, 
        (userAuth) => {
          unsubscribe();
          resolve(userAuth);
      },
        reject
      );
  })
}

export type ObjectsToAdd = {
  title: string;
}


export const addCollectionAndDocuments = async<T extends ObjectsToAdd>(collectionKey: string, objectsToAdd: T[]): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object);
    });
    await batch.commit();
}


export const getCategoriesAndDocuments = async(): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnapShop) => docSnapShop.data() as Category);
}

export type AdditionalInformation = {
    displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async(userAuth: User, additionalDetails = {} as AdditionalInformation): Promise<QueryDocumentSnapshot<User> | void> => {

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()) {
      const {email} = userAuth;
      const {displayName} = additionalDetails;
      console.log('firebase displayname:', displayName);
      const createdAt = new Date();
      console.log('creatdocfromauth:', displayName);

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalDetails,
        })

      }catch(e){
        console.log('problem creating user', e);
      }
    }

    return userSnapshot as QueryDocumentSnapshot<User>;

}

