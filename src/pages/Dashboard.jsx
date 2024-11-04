import { useState } from "react";
import DashboardCardProduct from "../Components/DashboardCardProduct";
import DashBoardWishListProduct from "../Components/DashBoardWishListProduct";

const Dashboard = () => {
  const [isShowCard, setIsShowCard] = useState(true);

  return (
    <div>
      <div className="bg-[#9538E2] text-center py-10">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-white py-3 text-sm">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <div className="flex justify-center items-center gap-10 mt-8">
          <button onClick={() => setIsShowCard(true)} className={isShowCard ? 'text-xl bg-white text-purple-600 border px-12 py-2 rounded-full' :'text-xl text-white border px-12 py-2 rounded-full'}>Card</button>
          <button onClick={() => setIsShowCard(false)} className={isShowCard ? 'text-xl text-white border px-12 py-2 rounded-full' :'text-xl text-purple-600 bg-white border px-12 py-2 rounded-full'}>Wishlist</button>
        </div>
      </div>

      <div className="bg-gray-200 pb-32 border">
          {
          isShowCard ? <DashboardCardProduct /> : <DashBoardWishListProduct />
          }
      </div>

    </div>
  )
}

export default Dashboard