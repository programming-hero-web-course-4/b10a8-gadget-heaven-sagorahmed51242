/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {price, product_image, product_title, product_id} = product;
  return (
    <div className="card bg-base-100  shadow-xl border">
  <figure className="p-2">
    <img className="w-full h-[200px] object-contain"
      src={product_image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{product_title}</h2>
    <p className="text-xl text-gray-500">price: {price}tk</p>
    <Link to={`/product-details/${product_id}`} className="text-[#9538E2]
      text-xl border-2 rounded-full text-center hover:border-none
      px-3 py-3 w-1/2 mx-auto border-x-purple-600
       border-t-purple-600 border-b-[#c031c0]
       my-3 hover:bg-purple-600 hover:text-white">Details</Link>
  </div>
</div>
  )
}

export default Product