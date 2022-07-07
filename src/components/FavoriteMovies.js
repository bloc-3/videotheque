import React from 'react';

// contenu de la page d'accueil sans la navbar
const FavoriteMovies = () => {
  const isAuthenticated = true;

  return (
    <div>
      {isAuthenticated ? 'yes' : <p>Vous ne pouvez pas accéder à cette section car vous n'êtes pas authentifié.</p>}
    </div>
  );
};

export default FavoriteMovies;