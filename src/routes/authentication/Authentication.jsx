import React from 'react'
import SignUp from '../../components/sign-up/SignUp.jsx'
import SignIn from '../../components/sign-in/SignIn.jsx'
import "./authentication.styles.scss"

function Authentication() {

  return (
    <div  className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication