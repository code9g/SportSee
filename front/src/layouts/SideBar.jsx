import { Link } from "react-router-dom";
import bikeIcon from "../assets/icons/bike.svg";
import swimmingIcon from "../assets/icons/swimming.svg";
import weightLiftingIcon from "../assets/icons/weightlifting.svg";
import zenIcon from "../assets/icons/zen.svg";

/**
 * Objet décrivant le "feature" dans la barre latèrale
 *
 * @private
 * @typedef {Object} SideBarLinkObject
 * @property {any} icon Content la ressource définisant l'icône à afficher
 * @property {string} alt Le texte alternatif de l'icône
 * @property {string} to La chemin de la feature
 */

/**
 * Tableau des fonctionnalités (features) dans la barre latèrale
 *
 * @private
 * @type {Array.<SideBarLinkObject>}
 */
const sideBarLinks = [
  { icon: zenIcon, alt: "", to: "#zen" },
  { icon: swimmingIcon, alt: "", to: "#swimming" },
  { icon: bikeIcon, alt: "", to: "#bike" },
  { icon: weightLiftingIcon, alt: "", to: "#weight" },
];

/**
 * Composant pour afficher la barre latérale (features).
 *
 * @component
 * @returns {JSX.Element} Le composant affichant la barre latérale.
 */
function SideBar() {
  return (
    <aside className="sidebar">
      <div className="content">
        <ul className="nav-menu">
          {sideBarLinks.map(({ icon, alt, to }, index) => (
            <li key={index}>
              <Link className="nav-link" to={to}>
                <img className="icon" src={icon} alt={alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="copyright">Copiryght,&nbsp;SportSee&nbsp;2020</p>
    </aside>
  );
}

export default SideBar;
