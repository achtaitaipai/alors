import {collection, getFirestore, getDocs, query, where} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

// Initialize Firebase
export const app = collection(getFirestore(initializeApp(firebaseConfig)),"images");

export const CreateSondage = async ([]) => {

}

export const Vote = async (id:String,value:number) => {

}

export const GetSondageById = async (id:String) => {
  const sondage = await getDocs(query(app, where("SondageId", "==", id)))
  const data = sondage.docs.map(el => ({... el.data(), id: el.id}))
  return data
}

export const GetSondagesByUserId = async (id:String) => {
  const sondage = await getDocs(query(app, where("CreateurId", "==", id)))
  const data = sondage.docs.map(el => el.data())
  return data
}