import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-full.svg";

/**
 * Objet de définition d'un lien de la barre de navigation (en-tête)
 *
 * @private
 * @typedef {Object} HeaderLinkObject
 * @property {string} title Titre du lien
 * @property {string} to Route/Chemin du lien
 */

/**
 * Liste des liens de navigation et de leur route
 *
 * @private
 * @type {Array<HeaderLinkObject>}
 */
const headerLinks = [
  { title: "Accueil", to: "/home" },
  { title: "Profil", to: "/profil" },
  { title: "Réglage", to: "/setting" },
  { title: "Communauté", to: "/forum" },
];

/**
 * Composant pour afficher l'en-tête du dashboard
 *
 * @component
 * @returns {JSX.Element} Un élément JSX contenant l'en-tête
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
              <NavLink to={to} className="nav-link">
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
