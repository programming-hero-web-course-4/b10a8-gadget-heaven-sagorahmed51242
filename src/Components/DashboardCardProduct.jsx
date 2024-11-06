/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../utility/ContextApi";

const DashboardCardProduct = () => {
  const navigate = useNavigate();

  const { removeFromCart, getCartItems, purchaseSuccessfully } = useContext(MyContext)


  const [cardItem, setCardItem] = useState([]);
  const [price, setPrice] = useState(0);

  // const { purchaseDone } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false);



  useEffect(() => {
    const totalPrice = cardItem.reduce((acc, product) => acc + product.price, 0);
    setPrice(totalPrice);
  }, [cardItem]);


  useEffect(() => {
    const items = getCartItems();
    setCardItem(items);
  }, [getCartItems])

  const handleDeleteProduct = (id) => {
    removeFromCart(id)
    const items = getCartItems();
    setCardItem(items);
  }

  const handleSortByPrice = () => {
    const sortedData = [...cardItem].sort((a,b) => b.price - a.price);
    setCardItem(sortedData);
  }

  const closePurchase = (value) => {
    setPurchase(value);
    purchaseSuccessfully();
    navigate("/");
  }
  return (
    <>
      {cardItem.length > 0 ? <div className="flex justify-between items-center max-w-[1000px] mx-auto mt-10">
        <div className="text-xl font-bold">Cart</div>
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Total: {price}tk</h1>
          <button onClick={handleSortByPrice} className="text-purple-600 border border-purple-600 rounded-full px-3 py-2">Sort by price</button>
          <button onClick={()=> setPurchase(true)} className="text-white bg-purple-600 px-3 py-2 rounded-full">Purchase</button>
        </div>
      </div> : <p className="text-center pt-10 text-xl font-bold">Empty Card List</p>}
      {cardItem && cardItem.map((product, index) => (<CardProduct key={index} handleDeleteProduct={handleDeleteProduct} product={product} />))}

      {purchase && <Modal price={price} closePurchase={closePurchase}  />}
    </>
  )
}

export default DashboardCardProduct