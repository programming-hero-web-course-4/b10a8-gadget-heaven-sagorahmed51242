/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { deleteProduct, getAllProduct } from "../utility";
import CardProduct from "./CardProduct";

const DashboardCardProduct = () => {

  const [cardItem, setCardItem] = useState([]);
  const [price, setPrice] = useState(0);



  useEffect(() => {
    const totalPrice = cardItem.reduce((acc, product) => acc + product.price, 0);
    setPrice(totalPrice);
  }, [cardItem]);


  useEffect(() => {
    const items = getAllProduct();
    setCardItem(items);
  }, [])

  const handleDeleteProduct = (product) => {
    deleteProduct(product)
    const items = getAllProduct();
    setCardItem(items);
  }

  const handleSortByPrice = () => {
    const sortedData = [...cardItem].sort((a,b) => b.price - a.price);
    setCardItem(sortedData);
  }
  return (
    <>
      {cardItem.length > 0 ? <div className="flex justify-between items-center max-w-[1000px] mx-auto mt-10">
        <div className="text-xl font-bold">Cart</div>
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Total: {price}tk</h1>
          <button onClick={handleSortByPrice} className="text-purple-600 border border-purple-600 rounded-full px-3 py-2">Sort by price</button>
          <button className="text-white bg-purple-600 px-3 py-2 rounded-full">Purchase</button>
        </div>
      </div> : <p className="text-center pt-10 text-3xl font-bold">Empty Card</p>}
      {cardItem && cardItem.map((product, index) => (<CardProduct key={index} handleDeleteProduct={handleDeleteProduct} product={product} />))}
    </>
  )
}

export default DashboardCardProduct