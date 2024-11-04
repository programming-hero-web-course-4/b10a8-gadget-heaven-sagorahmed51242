/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Category from "./Category"

const ProductsSection = ({category}) => {
  return (
    <div className="max-w-[1280px] mx-auto my-24">
        <h1 className="text-4xl font-bold text-center pb-8">Explore Cutting-Edge Gadgets</h1>
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-2">
                <Category category={category}/>
            </div>
            <div className="col-span-10">
                <Outlet/>
            </div>
        </div>

    </div>
  )
}

export default ProductsSection