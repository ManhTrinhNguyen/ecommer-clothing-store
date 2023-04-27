import React from 'react'
import SignUp from '../../components/sign-up/SignUp.jsx'
import SignIn from '../../components/sign-in/SignIn.jsx'
import { AuthenticationContainer } from './authentication.styles.jsx'

function Authentication() {

  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication