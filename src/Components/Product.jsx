/* eslint-disable react/prop-types */

const Product = ({product}) => {
    const {price, product_image, product_title} = product;
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
    <button className="text-[#9538E2]
      text-xl border-2 rounded-full
      px-3 py-3 w-1/2 mx-auto border-x-purple-600
       border-t-purple-600 border-b-[#c031c0]
       my-3 hover:bg-purple-600 hover:text-white">Details</button>
  </div>
</div>
  )
}

export default Product