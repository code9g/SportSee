import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-full.svg";

/**
 * Liste des liens de navigation et de leur route
 *
 * @type {Array<Object.{title: string, to: string}>}
 */
const headerLinks = [
  { title: "Accueil", to: "/home" },
  { title: "Profil", to: "/profil" },
  { title: "Réglage", to: "/setting" },
  { title: "Communauté", to: "/forum" },
];

/**
 * Function permettant de définir les classes à utiliser pour le NavLink
 *
 * Se base sur les valeurs de isActive et isPending afin de déterminer quelles classes
 * sont à retourner, sachant que la classe nav-link sera systématiquement incluse.
 *
 * @param {{ isActive: boolean; isPending: boolean; }} params
 * @param {boolean} params.isActive
 * @param {boolean} params.isPending
 * @returns {string} Liste des classes séparées par un espace
 */
const state = ({ isActive, isPending }) =>
  "nav-link " + (isPending ? "pending" : isActive ? "active" : "");

/**
 * Composant pour afficher l'en-tête du dashboard
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
              <NavLink xclassName="nav-link" to={to} className={state}>
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
