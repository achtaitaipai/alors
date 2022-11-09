import {collection, getFirestore, getDocs, query, where, doc, updateDoc, increment, addDoc} from 'firebase/firestore'
import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
}

// Initialize Firebase
const imagesCollection = collection(getFirestore(initializeApp(firebaseConfig)),"images")

type Images = {file:string,commentaire:string}[]

export const CreateSondage = async (images:Images, userId:string) => {
  //TODO : check user is correct, authed, etc. 

  //gen new sondage id
  //const sondageId = Symbol()
  const sondageId = Math.random().toString(16).slice(2)

  for(var i=0;i<images.length;i++){
    //add to db
    await addDoc(imagesCollection, {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "Commentaire": images[i].commentaire,
      "File": images[i].file,
      "SondageId": sondageId,
      "CreateurId": userId
    });
  }
}

export const Vote = async (id:string,value:number) => {
  const imageRef = doc(imagesCollection,id)
  await updateDoc(imageRef, {
    [value] : increment(1)
  })
}

export const GetSondageById = async (id:string) => {
  const sondage = await getDocs(query(imagesCollection, where("SondageId", "==", id)))
  const data = sondage.docs.map(el => ({... el.data(), id: el.id}))
  return data
}

export const GetSondagesByUserId = async (id:string) => {
  const sondage = await getDocs(query(imagesCollection, where("CreateurId", "==", id)))
  const data = sondage.docs.map(el => el.data())
  return data
}