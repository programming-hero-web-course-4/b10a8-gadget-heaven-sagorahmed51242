/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti"

const WishProduct = ({ product, handleDeleteProduct, handleAddToCard }) => {
  return (
      <div className="max-w-[1000px] mx-auto pt-3">
          <div className="flex gap-5 bg-white h-[170px] border border-gray-300 rounded-lg">
              <div className="w-[200px] h-[100%] border-r">
                  <img className=" w-full h-full p-2 rounded-y-lg object-contain" src={product.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-2 p-2">
                  <h1 className="text-xl font-bold">{product.product_title}</h1>
                  <h1 className="text-gray-500">{product.description}</h1>
                  <h1 className="text-gray-500">Price: {product.price}tk</h1>
                  <button  onClick={() => handleAddToCard(product)} className='text-white bg-purple-600 px-2 my-2 w-[130px] py-2 rounded-full'>Add to Card</button>
              </div>
              <div className="flex-1 relative">
                  <button onClick={() => handleDeleteProduct(product)}><TiDeleteOutline className="text-4xl text-red-600 absolute top-2 right-5" /></button>
              </div>
          </div>
      </div>
  )
}

export default WishProduct