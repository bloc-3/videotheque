import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ auth, setUserCredentials }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email;
    const password = e.target.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUserCredentials(userCredentials);
      })
      .catch((error) => {});
  };

  return (
    <form className="sign" onSubmit={handleSubmit}>
      <input type="text" placeholder="PSEUDO" required />
      <input type="email" placeholder="EMAIL" required />
      <input type="password" placeholder="MOT DE PASSE" required />
      <input type="submit" value="VALIDER" />
    </form>
  );
};

export default SignUp;
