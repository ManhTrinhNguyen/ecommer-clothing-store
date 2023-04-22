import React, { useState, useContext } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/Firebase';
import FormInput from '../form-input/FormInput';
import "./sign-up-form.style.scss"
import Button from '../button/Button';

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
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Display name */}
        <FormInput label="Display Name" onChange={handleChange} value={userInfomations.displayName} name='displayName' type="text" required />
        {/* Email Address */}
        <FormInput label="Email Address" onChange={handleChange} value={userInfomations.email} name='email' type="email" required />
        {/* Password */}
        <FormInput label="Password" onChange={handleChange} value={userInfomations.password} name='password' type="password" required />
        {/* Confirm Password */}
        <FormInput label="Confirm password" onChange={handleChange} value={userInfomations.confirmPassword} type="password" name='confirmPassword' required/>
        <Button type="submit">Sign Up</Button> 
      </form>
    </div>
  )
}

export default SignUp