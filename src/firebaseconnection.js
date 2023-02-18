import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAk3MrcnIQSf_eqpgqqa-bicPgRZhbZ9jE",
    authDomain: "segundo-projeto-veith.firebaseapp.com",
    projectId: "segundo-projeto-veith",
    storageBucket: "segundo-projeto-veith.appspot.com",
    messagingSenderId: "1056336974487",
    appId: "1:1056336974487:web:48e933689f36b5cd76cfd2",
    measurementId: "G-YFCXS0GN4D"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}