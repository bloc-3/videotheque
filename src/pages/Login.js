import React, { useState } from 'react';
import ConnectModal from '../components/ConnectModal';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../environnement/firebaseConf';

function Login(props) {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

    return (
        <div>
           <div className="app-header">
             <ConnectModal />
           </div> 
           <div className="posts-container"></div>
        </div>
    );
}

export default Login;