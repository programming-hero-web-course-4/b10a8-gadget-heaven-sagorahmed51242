import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import TitleUpdater from "../utility/TitleUpdater"

const MainLayout = () => {
    const location  =  useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/All%20Products" || location.pathname === "/Laptop" || location.pathname === "/Headphones" || location.pathname === "/Smartwatch" || location.pathname === "/Smartphone" || location.pathname === "/iPhone";
  return (
    <>
        {/* navbar */}
      <div className={isHome ? 'bg-[#9538E2] text-white sticky top-0 z-50' :'bg-white/50 sticky top-0 z-50 backdrop-blur-sm'}>
            <Navbar isHome={isHome} />
        </div>

        {/* dynamic data */}
          <Outlet />


        {/* footer */}
        <Footer/>

        <TitleUpdater/>
    </>
  )
}

export default MainLayout