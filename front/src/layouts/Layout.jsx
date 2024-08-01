import { Outlet } from "react-router-dom";
import HorizontalPanel from "../components/HorizontalPanel";
import SideBar from "../components/SideBar";

function Layout() {
  return (
    <>
      <HorizontalPanel />
      <SideBar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
