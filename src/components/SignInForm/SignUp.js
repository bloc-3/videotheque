import React from 'react';

const SignUp = () => {
  return (
    <form className='sign'>
      <input type="text" placeholder="PSEUDO" required />
      <input type="email" placeholder="EMAIL" required />
      <input type="password" placeholder="MOT DE PASSE" required />
      <input type="submit" value="VALIDER" />
    </form>
  );
};

export default SignUp;