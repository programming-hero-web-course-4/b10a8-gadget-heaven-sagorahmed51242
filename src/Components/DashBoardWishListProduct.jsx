/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import WishProduct from "./WishProduct"
import {addProduct, deleteWishProduct, getAllWishProduct } from "../utility";
import { CartContext } from "../utility/ContextApi";

const DashBoardWishListProduct = () => {
    const { removeFromWish ,addToCart} = useContext(CartContext);


    const [carditem, setCardItem] = useState([]);
    useEffect(() => {
        const items = getAllWishProduct();
        setCardItem(items);
    }, [])

    const handleDeleteProduct = (product) => {
        deleteWishProduct(product, removeFromWish)
        const items = getAllWishProduct();
        setCardItem(items);
    }
    const handleAddToCard = (product) => {
        addProduct(product, addToCart);
        deleteWishProduct(product, removeFromWish)
        const items = getAllWishProduct();
        setCardItem(items);
    }
    return (
        <>
            {carditem.length > 0 ? <div className="max-w-[1000px] mx-auto mt-10">
                <div className="text-xl font-bold">WishList</div>
            </div>:<p className="text-center pt-10 text-3xl font-bold">Empty Card</p>}
            {
                carditem && carditem.map((item, index) => (<WishProduct key={index} handleAddToCard={handleAddToCard}  handleDeleteProduct={handleDeleteProduct} product={item} />))
            }
        </>
    )
}

export default DashBoardWishListProduct