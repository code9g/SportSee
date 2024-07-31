import { Link } from "react-router-dom";
import logo from "../assets/logo-full.svg";

function HorizontalPanel() {
  return (
    <header className="horizontal-panel">
      <Link className="brand" to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <nav className="horizontal-menu">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profil">
              Profil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/setting">
              Réglage
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/setting">
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HorizontalPanel;
