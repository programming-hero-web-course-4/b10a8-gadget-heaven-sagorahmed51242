import { NavLink, Outlet } from "react-router-dom";

const AllProducts = () => {

  return (
      <>
        <div className="bg-[#9538E2] text-center py-10 pb-52">
            <h1 className="text-3xl font-bold text-white">Your Favourite Gadgetes</h1>
              <p className="text-white py-3 text-sm">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br/> the coolest accessories, we have it all!</p>


            <div className="max-w-[1280px] mx-auto mt-10">
              <ul className="flex justify-start items-center gap-5">
                  <li className="my-4">
                      <NavLink to={`/products/AllProducts`} className={({ isActive }) => isActive ? 'bg-[white] text-purple-600 font-bold px-4 py-2 rounded-full inline-block w-full ' : 'text-white border-2 px-3 inline-block w-full py-2 rounded-full'}>All Products</NavLink>
                  </li>
                  <li className="my-4">
                      <NavLink to={`/products/Laptop`} className={({ isActive }) => isActive ? 'bg-[white] text-purple-600 font-bold px-4 py-2 rounded-full inline-block w-full ' : 'text-white border-2 px-3 inline-block w-full py-2 rounded-full'}>Laptop</NavLink>
                  </li>
                  <li className="my-4">
                      <NavLink to={`/products/Smartwatch`} className={({ isActive }) => isActive ? 'bg-[white] text-purple-600 font-bold px-4 py-2 rounded-full inline-block w-full ' : 'text-white border-2 px-3 inline-block w-full py-2 rounded-full'}>Smartwatch</NavLink>
                  </li>
                  <li className="my-4">
                      <NavLink to={`/products/iPhone`} className={({ isActive }) => isActive ? 'bg-[white] text-purple-600 font-bold px-4 py-2 rounded-full inline-block w-full ' : 'text-white border-2 px-3 inline-block w-full py-2 rounded-full'}>iPhone</NavLink>
                  </li>
                  <li className="my-4">
                      <NavLink to={`/Products/Smartphone`} className={({ isActive }) => isActive ? 'bg-[white] text-purple-600 font-bold px-4 py-2 rounded-full inline-block w-full ' : 'text-white border-2 px-3 inline-block w-full py-2 rounded-full'}>Smartphone</NavLink>
                  </li>
              </ul>
            </div>
        </div>

          <div className="max-w-[1280px] mx-auto -mt-48">
              <Outlet/>
          </div>
      </>
  )
}

export default AllProducts