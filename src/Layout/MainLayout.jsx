import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TitleUpdater from "../utility/TitleUpdater";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "../utility/ContextApi";

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" ||
    location.pathname === "/All%20Products" ||
    location.pathname === "/Laptop" ||
    location.pathname === "/Headphones" ||
    location.pathname === "/Smartwatch" ||
    location.pathname === "/Smartphone" ||
    location.pathname === "/iPhone";

  return (
    <CartProvider>
      <ToastContainer />
      {/* Navbar */}
      <div className={isHome ? 'bg-[#9538E2] text-white sticky top-0 z-50' : 'bg-white/50 sticky top-0 z-50 backdrop-blur-sm'}>
        <Navbar isHome={isHome} />
      </div>

      {/* Dynamic data */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Page Title Updater */}
      <TitleUpdater />
    </CartProvider>


  );
}

export default MainLayout;
