/* eslint-disable react/prop-types */

import {  useContext, useEffect, useState } from "react";
import WishProduct from "./WishProduct"
import { MyContext } from "../utility/ContextApi";
import { toast } from "react-toastify";

const DashBoardWishListProduct = () => {

    const { removeFromWishlist, addToCart, getWishlistItems, getCartItems } = useContext(MyContext)
    const [carditem, setCardItem] = useState([]);

    useEffect(() => {
        const items = getWishlistItems();
        setCardItem(items);
    }, [getWishlistItems])

    const handleDeleteProduct = (product) => {
        removeFromWishlist(product.product_id)
        const items = getWishlistItems();
        setCardItem(items);
    }
    const handleAddToCard = (product) => {
        const currentWishlist = getCartItems();
        const isExist = currentWishlist.find((item) => item.product_id === product.product_id);
        if(isExist){
            toast.error("Already Added!",{
                autoClose:1000,
            })
        }else{
            addToCart(product);
            removeFromWishlist(product.product_id)
            const items = getWishlistItems();
            setCardItem(items);
        }
    }
    return (
        <>
            {carditem.length > 0 ? <div className="max-w-[1000px] mx-auto mt-10">
                <div className="text-xl font-bold">WishList</div>
            </div>:<p className="text-center pt-10 text-xl font-bold">Empty Wish List</p>}
            {
                carditem && carditem.map((item, index) => (<WishProduct key={index} handleAddToCard={handleAddToCard}  handleDeleteProduct={handleDeleteProduct} product={item} />))
            }
        </>
    )
}

export default DashBoardWishListProduct