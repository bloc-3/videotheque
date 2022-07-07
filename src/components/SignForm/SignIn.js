import React from "react";

const SignIn = ({ auth }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email;
    const password = e.target.password;
  };

  return (
    <form className="signInForm" onSubmit={handleSubmit}>
      <input type="email" placeholder="EMAIL" required />
      <input type="password" placeholder="MOT DE PASSE" required />
      <input type="submit" value="VALIDER" />
    </form>
  );
};

export default SignIn;
