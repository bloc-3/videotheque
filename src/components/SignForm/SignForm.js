import React from 'react';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

// contenu de la page de connexion sans la navbar
const SignForm = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className='SignForm'>
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

export default SignForm;