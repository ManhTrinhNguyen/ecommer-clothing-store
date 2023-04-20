import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC-BfzZ-UXwU0iOR_cTmG_f1x7uZ59eDt0",
  authDomain: "crwn-clothing-db-d68ec.firebaseapp.com",
  projectId: "crwn-clothing-db-d68ec",
  storageBucket: "crwn-clothing-db-d68ec.appspot.com",
  messagingSenderId: "240144351249",
  appId: "1:240144351249:web:5cfc273ff116053eb271b0"
}; 

const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();


googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect =() => signInWithRedirect(auth, googleProvider)
export const db = getFirestore(fireBaseApp)

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);

  // if User does not exist 
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const whenCreatedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        whenCreatedAt
       })
    } catch (err) {
      console.log(`error creating the user ${err.message}`);
    }
  } 
  return userDocRef 
}
