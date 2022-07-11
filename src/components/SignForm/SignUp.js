import React, { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { context } from "../../context";

const SignUp = () => {
  const { auth, setUserCredentials } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUserCredentials(userCredentials);
      })
      .catch((error) => {});
  };

  return (
    <form className="sign" onSubmit={handleSubmit}>
      <input type="text" name="pseudo" placeholder="PSEUDO" required />
      <input type="email" name="email" placeholder="EMAIL" required />
      <input
        type="password"
        name="password"
        placeholder="MOT DE PASSE"
        required
      />
      <input type="submit" value="VALIDER" />
    </form>
  );
};

export default SignUp;
