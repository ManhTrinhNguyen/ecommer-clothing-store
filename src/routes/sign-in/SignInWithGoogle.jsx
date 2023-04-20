import React, {useEffect} from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth
} from "../../utils/firebase/Firebase.js"
import { getRedirectResult } from 'firebase/auth'

function SignInWithGoogle() {

  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth)
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    }
    fetchData()
  }, [])
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }
    
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in With Google Redirect</button>
    </div>
  )
}

export default SignInWithGoogle