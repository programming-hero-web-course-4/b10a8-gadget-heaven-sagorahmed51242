/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Create the Context with default values
// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [wishCount, setWishCount] = useState(0);

    // Function to fetch and set the cart and wishlist counts from localStorage
    const updateCounts = () => {
        const StoredCartData = localStorage.getItem("cart");
        if (StoredCartData) {
            const items = JSON.parse(StoredCartData);
            setCartCount(items.length);

        }

        const StoredWishData = localStorage.getItem("wish");
        if (StoredWishData) {
            const items = JSON.parse(StoredWishData);
            setWishCount(items.length);
        }
    };

    useEffect(() => {
        // Initialize counts when the component mounts
        updateCounts();

        // This will run whenever localStorage changes in this tab
        window.addEventListener("storage", updateCounts);

        return () => {
            window.removeEventListener("storage", updateCounts);
        };
    }, []); // Empty array to run once on mount

    // Custom function to add items to localStorage and update state
    const addToCart = (item) => {
        const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const isExist = currentCart.find((product) => product.product_id === item.product_id);
        if(isExist) {
            toast.error("Already Added This Product!",{
                autoClose:1000,
            })
        }else{
            currentCart.push(item);
            localStorage.setItem("cart", JSON.stringify(currentCart));
            updateCounts();
            toast.success("Successfully Add to Cart!", {
                autoClose: 1000,
            }) // Update the count after adding to localStorage
        }
    };

    const addToWishlist = (item) => {
        const currentWishlist = JSON.parse(localStorage.getItem("wish") || "[]");
        const isExist = currentWishlist.find((product) => product.product_id === item.product_id);
        if(isExist){
            toast.error("Already Exists This Product!",{
                autoClose:1000,
            })
        }else{
            currentWishlist.push(item);
            localStorage.setItem("wish", JSON.stringify(currentWishlist));
            updateCounts();
            toast.success("Successfully Add to Wishlist!",{
                autoClose:1000,
            }) // Update the count after adding to localStorage
        }
    };

    // Custom function to remove items from cart in localStorage and update state
    const removeFromCart = (itemId) => {
        const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const updatedCart = currentCart.filter(item => item.product_id !== itemId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateCounts();
        toast.error("Deleted from Cart!",{
            autoClose:500,
        }) // Update the count after removing from localStorage
    };

    // Custom function to remove items from wishlist in localStorage and update state
    const removeFromWishlist = (itemId) => {
        const currentWishlist = JSON.parse(localStorage.getItem("wish") || "[]");
        const updatedWishlist = currentWishlist.filter(item => item.product_id !== itemId);
        localStorage.setItem("wish", JSON.stringify(updatedWishlist));
        updateCounts();
        toast.error("Deleted from Wishlist!",{
            autoClose:500,
        }) // Update the count after removing from localStorage
    };

    // Function to get cart items
    const getCartItems = () => {
        const StoredCartData = localStorage.getItem("cart");
        return StoredCartData ? JSON.parse(StoredCartData) : [];
    };

    // Function to get wishlist items
    const getWishlistItems = () => {
        const StoredWishData = localStorage.getItem("wish");
        return StoredWishData ? JSON.parse(StoredWishData) : [];
    };


    const purchaseSuccessfully = () => {
        localStorage.removeItem("cart");
        setCartCount(0);
    }


    return (
        <MyContext.Provider
            value={{
                cartCount,
                wishCount,
                addToCart,
                addToWishlist,
                removeFromCart,
                removeFromWishlist,
                getCartItems,
                getWishlistItems,
                purchaseSuccessfully
            }}
        >
            {children}
        </MyContext.Provider>
    );
};
