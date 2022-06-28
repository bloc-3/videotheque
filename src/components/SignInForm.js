import React from 'react';
import { useState } from 'react';
import SignIn from './SignInForm/SignIn';
import SignUp from './SignInForm/SignUp';

// contenu de la page de connexion sans la navbar
const SignInForm = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className='SignInForm'>
      <div className='buttons'>
        <div className={signIn ? 'activeButton' : ''} onClick={() => setSignIn(true)}>CONNEXION</div>
        <div className={signIn ? '' : 'activeButton'} onClick={() => setSignIn(false)}>INSCRIPTION</div>
      </div>
      <div className='signform'>
        {signIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default SignInForm;