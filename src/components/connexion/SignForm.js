import { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

const SignForm = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <main className='SignFormContainer'>
      <div className='SignForm'>
      <div className='buttons'>
        <div className={signIn ? 'activeButton' : ''} onClick={() => setSignIn(true)}>CONNEXION</div>
        <div className={signIn ? '' : 'activeButton'} onClick={() => setSignIn(false)}>INSCRIPTION</div>
      </div>
      <div className='signform'>
        {signIn ? <SignIn /> : <SignUp />}
      </div>
      </div>
    </main>
  );
};

export default SignForm;