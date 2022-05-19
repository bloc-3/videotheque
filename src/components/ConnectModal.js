import React from 'react';
import { useState } from 'react';

import SignUp from '../components/SignUp';
import Login from '../components/Login';

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);
  
  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button 
          style={{background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83)"}}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button 
          style={{background: !signUp ? "rgb(28,28,28)" : "rgb(83,83,83)"}}
          onClick={() => setSignUp(false)}
        >
          Se connecter
        </button>
      </div>
      {signUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;