import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { context } from "../../context";

const SignIn = () => {
  const navigate = useNavigate();
  const { auth, setUserId } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUserId(userCredentials.user.uid);
        console.log("connection ok ", email);
        navigate("/");
      })
      .catch((error) => {
        console.log("connection erreur ", email);
        navigate("/");
      });
  };

  return (
    <form className="signInForm" onSubmit={handleSubmit}>
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

export default SignIn;
