import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { context } from "../../context";

const SignUp = () => {
  const { auth } = useContext(context);
  const navigate = useNavigate();
  const [accountCreationError, setAccountCreationError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setAccountCreationError(false);
        navigate("/");
      })
      .catch((error) => {
        setAccountCreationError(true);
      });
  };

  return (
    <>
      {accountCreationError && (
        <p>Erreur lors de la création de compte. Veuillez réessayer.</p>
      )}
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
    </>
  );
};

export default SignUp;
