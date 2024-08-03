import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

/**
 * Composant pour afficher le 'layout' qui est l'affichage principal.
 *
 * @component
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
