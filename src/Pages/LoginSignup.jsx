import React from 'react'
import { Amplify } from 'aws-amplify';
import './css/LoginSignup.css'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const LoginSignup = () => {
  return (
    <div className='login'>
       <Authenticator>
      {({ signOut, user }) => (
        <main >
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
  )
}

export default LoginSignup