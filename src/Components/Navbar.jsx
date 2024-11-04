/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const Navbar = ({isHome}) => {
  return (
    <>
        <div className="flex justify-between items-center max-w-[1280px] mx-auto  py-4">
            <div>
                <NavLink to={"/"} className="text-xl font-bold">Gadget Heaven</NavLink>
            </div>
            <div>
                <ul className="flex font-semibold gap-12">
                    <li>
                        <NavLink className={({isActive})=>isActive || isHome? 'underline':"" } to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive? 'underline':"" } to={"/Products"}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive? 'underline':"" } to={"/statistics"}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive? 'underline':"" } to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex gap-3">
                <div className="border text-black p-2 rounded-full bg-white">
                    <AiOutlineShoppingCart />
                </div>
                <div className="border text-black p-2 rounded-full bg-white">
                    <CiHeart  />
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar