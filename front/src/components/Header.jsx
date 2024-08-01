import { Link } from "react-router-dom";
import logo from "../assets/logo-full.svg";

const headerLinks = [
  { title: "Accueil", to: "/home" },
  { title: "Profil", to: "/profil" },
  { title: "Réglage", to: "/setting" },
  { title: "Communauté", to: "/forum" },
];

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <img className="logo" src={logo} alt="Logo de SportSee" />
      </Link>
      <nav className="nav-bar">
        <ul className="nav-menu">
          {headerLinks.map(({ title, to }, index) => (
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

export default Header;
