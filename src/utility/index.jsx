import { toast } from "react-toastify";


//get product from local storagee
const getAllProduct = () => {
    const allProduct = localStorage.getItem("card");
    if(allProduct) {
        const card = JSON.parse(allProduct);
        return card;
    }else{
        return [];
    }
}

//add product in local storage
const addProduct = (item) => {
    const productlist = getAllProduct();
    const isExist = productlist.find((card) => card.product_id === item.product_id);
    if(isExist){
        toast.error("Already Added this Product",{
            position:"top-center",
            autoClose:1000,
        })
    }else{
        productlist.push(item);
        localStorage.setItem("card", JSON.stringify(productlist));
        toast.success("Succuesfully Add to Card",{
            position:"top-center",
            autoClose:1000,
        })
    }
}


//remove product from local storage
const deleteProduct = (item) => {
    const allProducts = getAllProduct();
    const newProduct = allProducts.filter((p) => p.product_id !== item.product_id);
    localStorage.setItem("card", JSON.stringify(newProduct));
    toast.error("This is deleted!", {
        position: "top-center",
        autoClose: 1000,
    })
}

export { addProduct ,getAllProduct, deleteProduct}





//for wishList


//get product from local storagee
const getAllWishProduct = () => {
    const allProduct = localStorage.getItem("wish");
    if (allProduct) {
        const card = JSON.parse(allProduct);
        return card;
    } else {
        return [];
    }
}

//add product in local storage
const addWishProduct = (item) => {
    const productlist = getAllWishProduct();
    const isExist = productlist.find((card) => card.product_id === item.product_id);
    if (isExist) {
        toast.error("Already Added this Product", {
            position: "top-center",
            autoClose: 1000,
        })
    } else {
        productlist.push(item);
        localStorage.setItem("wish", JSON.stringify(productlist));
        toast.success("Succuesfully Add to WishList", {
            position: "top-center",
            autoClose: 1000,
        })
    }
}


//remove product from local storage
const deleteWishProduct = (item) => {
    const allProducts = getAllWishProduct();
    const newProduct = allProducts.filter((p) => p.product_id !== item.product_id);
    localStorage.setItem("wish", JSON.stringify(newProduct));
    toast.error("This is deleted!",{
        position: "top-center",
        autoClose:1000,
    })
}

export { addWishProduct, getAllWishProduct, deleteWishProduct }