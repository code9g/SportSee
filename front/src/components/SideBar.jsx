import { Link } from "react-router-dom";
import bikeIcon from "../assets/bike.svg";
import swimmingIcon from "../assets/swimming.svg";
import weightLiftingIcon from "../assets/weightlifting.svg";
import zenIcon from "../assets/zen.svg";

const sideBarLinks = [
  { icon: zenIcon, alt: "", to: "#zen" },
  { icon: swimmingIcon, alt: "", to: "#swimming" },
  { icon: bikeIcon, alt: "", to: "#bike" },
  { icon: weightLiftingIcon, alt: "", to: "#weight" },
];

function SideBar() {
  return (
    <aside className="vertical-panel">
      <div className="vertical-content">
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
