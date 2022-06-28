import React from 'react';

const SignIn = () => {
  return (
    <form className='signForm'>
      <input type="email" placeholder="EMAIL" required />
      <input type="password" placeholder="MOT DE PASSE" required />
      <input type="submit" value="VALIDER" />
    </form>
  );
};

export default SignIn;