import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const MainAlllProducs = () => {
    const data = useLoaderData();
    const value = useParams();
    const category = value.products;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(category){
            if(category === "AllProducts"){
                setProducts(data);
            }else{
                const newData = [...data].filter((item) => item.category === category);
                setProducts(newData)
            }
        }else{
            setProducts(data)
        }
    },[category, data])

    const handleSortByPrice = () =>{
        const sortedData = [...products].sort((a,b) => b.price - a.price);
        setProducts(sortedData)
    }

  return (
      <>
            <div className="absolute top-[262px] right-[320px]">
              <button onClick={handleSortByPrice} className="text-xl text-white border px-4 py-2 active:bg-white active:text-purple-600 rounded-full hover:bg-white hover:text-purple-700">Sort by price</button>
            </div>
          <div className="grid grid-cols-4 gap-5">
              {products.map((item, index) => (<Product key={index} product={item} />))}
          </div>
      </>
  )
}

export default MainAlllProducs