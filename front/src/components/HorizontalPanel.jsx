import { Link } from "react-router-dom";
import logo from "../assets/logo-full.svg";

const horizontalLinks = [
  { title: "Accueil", to: "/home" },
  { title: "Profil", to: "/profil" },
  { title: "Réglage", to: "/setting" },
  { title: "Communauté", to: "/forum" },
];

function HorizontalPanel() {
  return (
    <header className="horizontal-panel">
      <Link className="brand" to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <nav className="horizontal-menu">
        <ul className="nav-menu">
          {horizontalLinks.map(({ title, to }, index) => (
            <li key={index} className="nav-item">
              <Link className="nav-link" to={to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HorizontalPanel;
