import { Outlet } from "react-router-dom";
import HorizontalPanel from "../components/HorizontalPanel";
import VerticalPanel from "../components/VerticalPanel";

function Layout() {
  return (
    <>
      <HorizontalPanel />
      <VerticalPanel />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
