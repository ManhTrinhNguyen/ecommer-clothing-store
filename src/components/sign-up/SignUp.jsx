import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/Firebase';

function SignUp() {
  const [userInfomations, setUserInfomations] = useState({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  })
  const { email, password, displayName, confirmPassword } = userInfomations
  
  function resetFormField() {
    setUserInfomations({
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    })
  }

  async function handleSubmit(event) {
      event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match")
      return 
    }
    try { 
      const response = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(response.user, { displayName })
      resetFormField()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use")
      } else {
        console.log("User creation encounterd an error", error)
      }

    }
  }

  

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        {/* Display name */}
        <label htmlFor="displayName">Display name</label>
        <input onChange={handleChange} value={userInfomations.displayName} name='displayName' type="text" required />
        {/* Email Address */}
        <label htmlFor='email'>Email Address</label>
        <input onChange={handleChange} value={userInfomations.email} name='email' type="email" required />
        {/* Password */}
        <label htmlFor='password'>Password</label>
        <input onChange={handleChange} value={userInfomations.password} name='password' type="password" required />
        {/* Confirm Password */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input onChange={handleChange} value={userInfomations.confirmPassword} type="password" name='confirmPassword' required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp