/* eslint-disable react/prop-types */
// utility/ContextApi.js
import { createContext, useState } from 'react';

// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0)
    const [wishCount, setWishCount] = useState(0)

    // Function to add items to the cart
    const addToCart = () => {
        setCartCount(cartCount => cartCount + 1); // Increment count by 1
    };
    // Function to delete items from the cart
    const removeFromCart = () => {
        setCartCount(cartCount => Math.max(0, cartCount - 1));
    };

    //when puchase will done counter will be zero
    const purchaseDone = () => {
        setCartCount(0);
    }
    // Function to add items to the wish
    const addToWish = () => {
        setWishCount(wishCount => wishCount + 1); // Increment count by 1
    };
    // Function to delete items from the wish
    const removeFromWish = () => {
        setWishCount(wishCount => Math.max(0, wishCount - 1));
    };


    return (
        <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, wishCount, addToWish, removeFromWish, purchaseDone }}>
            {children}
        </CartContext.Provider>
    );
};
