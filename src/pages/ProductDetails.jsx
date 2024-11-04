import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom"
import StarRating from "../utility/Raging";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct, addWishProduct, getAllWishProduct } from "../utility";

const ProductDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();

    const [product, setProduct] = useState({});
    const [isDisable, setDisable] = useState(false);

    useEffect(() => {
        const newData = [...data].find((item) => item.product_id == id)
        setProduct(newData)
        const productlist = getAllWishProduct();
        const isExist = productlist.find((card) => card.product_id === newData.product_id);
        if(isExist){
            setDisable(true)
        }else{
            setDisable(false)
        }
    },[data, id])

    const handleAddToCard = (product) => {
        addProduct(product);
    }
    const handleAddToWishList = (product) => {
        addWishProduct(product);
    }
  return (
    <>
              <div className="bg-[#9538E2] text-center py-10 pb-52">
                  <h1 className="text-3xl font-bold text-white">Product Details</h1>
                  <p className="text-white py-3 text-sm">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
              </div>
              <div className="bg-gray-200">
                  <div className="max-w-[1280px] border rounded-2xl grid grid-cols-3 p-6 bg-white gap-10  mx-auto">
                      <div className="col-span-1 border border-green-500 rounded-xl">
                          <img className="w-full h-full  object-contain p-4" src={product.product_image} alt={product.Product_title} />
                      </div>
                      <div className="col-span-2 flex flex-col gap-3">
                          <h1 className="text-2xl font-bold">{product.product_title}</h1>
                          <h1 className="text-lg">Price: {product.price}tk</h1>
                          <h1 className="border border-green-500 text-green-500 bg-green-100 rounded-full px-3 py-1 w-[130px] text-center">{product.availability ? 'In Stock' : 'Out of Stock'}</h1>
                          <p className="text-[#09080F99]">{product.description}</p>
                          <h2 className="font-bold">Spacification:</h2>
                          <ul>
                              {product.specification?.map((item, index) => (<li className="text-[#09080F99]" key={index}>{index + 1}.  {item}</li>
                              ))}
                          </ul>
                          <h2 className="font-bold">Rating:</h2>
                          <div className="flex items-center text-xl font-bold"><StarRating rating={Math.floor(product.rating)} /> <span className="text-sm bg-gray-200 ml-2 px-2 py-1 rounded-full">{product.rating}</span></div>
                          <div className="flex items-center gap-4">
                              <button className="flex items-center bg-[#9538E2] text-white px-3 py-2 rounded-full gap-2" onClick={()=>handleAddToCard(product)}><span>Add To Card</span> <span><AiOutlineShoppingCart className="text-lg" /></span> </button>
                          <button disabled={isDisable} className={isDisable ? 'border border-red-500 p-2 rounded-full text-2xl' :'border border-green-500 p-2 rounded-full text-2xl'} onClick={()=>handleAddToWishList(product)}><CiHeart /></button>
                          </div>
                      </div>
                  </div>
              </div>
    </>
  )
}

export default ProductDetails