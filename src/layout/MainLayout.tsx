import { Outlet } from "react-router-dom";
import AppSidebar from "../components/app-sidebar";
import AppNavBar from "../components/app-navbar";

const MainLayout = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-amber-50 text-amber-700">
          {/* Navbar */}
          <AppNavBar />
          {/* Page content here */}
          <main className="p-4">
            <Outlet />
          </main>
        </div>

        <AppSidebar />
      </div>
    </>
  );
};

export default MainLayout;
