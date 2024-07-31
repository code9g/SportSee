import { Link } from "react-router-dom";
import bikeIcon from "../assets/bike.svg";
import swimmingIcon from "../assets/swimming.svg";
import weightLiftingIcon from "../assets/weightlifting.svg";
import zenIcon from "../assets/zen.svg";

const verticalLinks = [
  { icon: zenIcon, alt: "", to: "/profil" },
  { icon: swimmingIcon, alt: "", to: "/profil" },
  { icon: bikeIcon, alt: "", to: "/profil" },
  { icon: weightLiftingIcon, alt: "", to: "/profil" },
];

function VerticalPanel() {
  return (
    <aside className="vertical-panel">
      <div className="vertical-content">
        <ul className="nav-menu">
          {verticalLinks.map(({ icon, alt, to }, index) => (
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

export default VerticalPanel;
