import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import TitleUpdater from "../utility/TitleUpdater"

const MainLayout = () => {
    const location  =  useLocation();
    const isHome = location.pathname === "/";
  return (
    <>
        {/* navbar */}
        <div className={isHome? 'bg-[#9538E2] text-white':'bg-white'}>
            <Navbar/>
        </div>

        {/* dynamic data */}
        <Outlet/>


        {/* footer */}
        <Footer/>

        <TitleUpdater/>
    </>
  )
}

export default MainLayout