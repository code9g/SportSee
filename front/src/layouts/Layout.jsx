import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

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
