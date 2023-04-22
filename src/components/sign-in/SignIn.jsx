import React, { useState } from 'react'

import FormInput from '../form-input/FormInput';
import "./sign-in.styles.scss"
import Button from '../button/Button';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, signInWithGitHubPopup } from '../../utils/firebase/Firebase';


function SignIn() {
  const [userInfomations, setUserInfomations] = useState({
    email: "",
    password: "",
  })
  
  const { email, password } = userInfomations
  
  // Reset Form field
  function resetFormField() {
    setUserInfomations({
      email: "",
      password: "",
    })
  }

// Sign in With Google
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  // Signin With Github
  
  const signInWithGitHub = async () => {
     await signInWithGitHubPopup();
    
  }
    
// handle Submit to sign in with email and password
  async function handleSubmit(event) {
      event.preventDefault();
    try { 
      const response = await signInAuthUserWithEmailAndPassword(email, password)

      resetFormField()
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password for Email")
      } else if (error.code === "auth/user-not-found") {
        alert("no user associated with this email")
      }
        console.log("User creation encounterd an error", error)

    }
  }
//Handle Change
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value
    setUserInfomations(prevValue => (
      {
        ...prevValue,
        [name] : value
      }
    ))
  }
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Email Address */}
        <FormInput label="Email Address" onChange={handleChange} value={userInfomations.email} name='email' type="email" required />
        {/* Password */}
        <FormInput label="Password" onChange={handleChange} value={userInfomations.password} name='password' type="password" required />
        <div className='buttons-container'>
        <Button type="submit">Sign In</Button> 
          <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button> 
        <Button type="button" onClick={signInWithGitHub}>GitHub</Button>
        </div>
        
      </form>
    </div>
  )
}

export default SignIn