/* eslint-disable react/prop-types */

import { TiDeleteOutline } from "react-icons/ti"

const CardProduct = ({ product, handleDeleteProduct }) => {
  return (
      <div className="max-w-[1000px] mx-auto pt-3">
          <div className="flex rounded-xl gap-5 bg-white h-[130px] border border-gray-300 rounded-l-lg">
              <div className="w-[200px] h-[100%] border-r">
                  <img className="w-[100%] h-[100%] rounded-y-lg object-contain p-2" src={product.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-2 p-2">
                  <h1 className="text-xl font-bold">{product.product_title}</h1>
                  <h1 className="text-gray-500">{product.description}</h1>
                  <h1 className="text-gray-500">Price: {product.price}tk</h1>
              </div>
              <div className="flex-1 relative">
                  <button onClick={() => handleDeleteProduct(product.product_id)}><TiDeleteOutline className="text-4xl text-red-600 absolute top-2 right-5" /></button>
              </div>
          </div>
      </div>
  )
}

export default CardProduct