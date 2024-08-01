import { Link } from "react-router-dom";
import sideBarLinks from "../utils/sideBarLinks";

/**
 * Composant pour afficher la barre latérale (features).
 *
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
