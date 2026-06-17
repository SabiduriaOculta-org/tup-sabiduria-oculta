import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";

function Layout() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {!isMobile && <Sidebar />}

      <main>
        <Outlet />
      </main>

      {isMobile && <BottomBar />}
    </>
  );
}

export default Layout;