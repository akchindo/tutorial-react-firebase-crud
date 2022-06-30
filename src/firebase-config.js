import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyDfioKOwuexNJBJ4GTx3V3zU8Fd0J7X8mM",
    authDomain: "react-crud-tutorial-1cf47.firebaseapp.com",
    projectId: "react-crud-tutorial-1cf47",
    storageBucket: "react-crud-tutorial-1cf47.appspot.com",
    messagingSenderId: "827893526291",
    appId: "1:827893526291:web:ed60cd290d5dcf07c334e6",
    measurementId: "G-CJTL0RGRG2"
  };


  const app = initializeApp(firebaseConfig)
 export const db = getFirestore(app)
