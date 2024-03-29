const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-center">
        Par Jérôme BARBIER, Nicolas FERCHAUD, Esteban MARTEL. Le code source est
        sous licence
        <a
          href="http://opensource.org/licenses/mit-license.php"
          className="text-light"
        >
          {" "}
          MIT
        </a>
        . Cette application utilise l'API TMDB mais n'est pas soutenue ni
        certifiée par TMDB.
      </p>
    </footer>
  );
};

export default Footer;
