
import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  GithubAuthProvider,
  signOut, 
  onAuthStateChanged
} from "firebase/auth";
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

// Google Provider
const googleProvider = new GoogleAuthProvider();
// Github Provider
const gitHubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
// Sign in with Google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
// Signin With Git Hub
export const signInWithGitHubPopup = () => signInWithPopup(auth, gitHubProvider)
// Firestore
export const db = getFirestore(fireBaseApp)

export const createUserDocumentFromAuth = async (userAuth, additionalInfomation = { }) => {
  if (!userAuth) return 

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
        whenCreatedAt,
        ...additionalInfomation
       })
    } catch (err) {
      console.log(`error creating the user ${err.message}`);
    }
  } 
  return userDocRef 
}

// Create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return 
  const response = await createUserWithEmailAndPassword(auth, email, password)
  return response
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return 
  }
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuthUser = () => {
  return signOut(auth)
}
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}