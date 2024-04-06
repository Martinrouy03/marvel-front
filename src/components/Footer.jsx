import "../css/footer.scss";
import idPhoto from "../assets/martinRouy.png";
import logoReacteur from "../assets/logoReacteur.png";
const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-left">
        <img src={idPhoto} alt="identity-picture" />
        <a
          href="https://github.com/Martinrouy03?tab=repositories"
          target="_blank"
        >
          About me
        </a>
      </div>
      <div className="footer-right">
        <span>Made at</span>
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logoReacteur} alt="logo-reacteur" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
