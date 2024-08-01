import { Link } from "react-router-dom";
import logo from "../assets/logo-full.svg";
import headerLinks from "../consts/headerLinks";

/**
 * Composant pour afficher l'en-tête du dashboard
 *
 * @returns {JSX.Element} - Un élément JSX contenant l'en-tête
 */
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
