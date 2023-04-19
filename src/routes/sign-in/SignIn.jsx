import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/Firebase.js"

function SignIn() {
  
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }
    
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
    </div>
  )
}

export default SignIn 