import React from 'react';
import Navbar from '../components/Navbar';
import SignForm from '../components/SignForm/SignForm';

const Connexion = ({ auth, setUserCredentials }) => {
  return (
    <div>
      <Navbar />
      <SignForm auth={ auth } setUserCredentials={ setUserCredentials } />
    </div>
  );
};

export default Connexion;