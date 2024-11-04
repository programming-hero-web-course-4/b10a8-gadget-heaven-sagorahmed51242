/* eslint-disable react/prop-types */

import { TiDeleteOutline } from "react-icons/ti"

const CardProduct = ({ product, handleDeleteProduct }) => {
  return (
      <div className="max-w-[1000px] mx-auto pt-3">
          <div className="flex border rounded-xl gap-5 bg-white">
              <div className="w-[200px] h-[120px] border">
                  <img className=" w-full h-full rounded-y-lg object-contain p-2" src={product.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-2 p-2">
                  <h1 className="text-xl font-bold">{product.product_title}</h1>
                  <h1 className="text-gray-500">{product.description}</h1>
                  <h1 className="text-gray-500">Price: {product.price}tk</h1>
              </div>
              <div className="flex-1 relative">
                  <button onClick={() => handleDeleteProduct(product)}><TiDeleteOutline className="text-4xl text-red-600 absolute top-2 right-5" /></button>
              </div>
          </div>
      </div>
  )
}

export default CardProduct