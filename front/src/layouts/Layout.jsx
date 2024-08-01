import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

/**
 * Composant pour afficher le 'layout' qui est l'affichage principal.
 *
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
