import { useLoaderData, useParams } from "react-router-dom"
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
    const data = useLoaderData();
    const { category } = useParams();

    const [products, setProducts] = useState([data]);
    const [showAll, setShowAll] = useState(false);


    useEffect(()=> {
        setShowAll(false);
    },[category, data])


    useEffect(() => {
        if (category) {
            if (category === "All Products") {
                setProducts(showAll? data : data.slice(0, 6));

            } else {
                const filteredData = [...data].filter((item) => (item.category === category))
                setProducts(showAll? filteredData : filteredData.slice(0, 6));
            }

        } else {
            setProducts(showAll? data : data.slice(0,6))
        }
    }, [category, data, showAll])

    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {products.map((item, index) => (<Product key={index} product={item} />))}
            </div>

            {!showAll && <div className="text-center">
                <button onClick={() => setShowAll(true)} className="bg-gradient-to-r hover:text-white hover:from-purple-700 hover:to-pink-500  transition duration-300 text-xl border px-4 py-2 rounded-full border-purple-600 mt-10 text-purple-600">Show All</button>
            </div>}
        </>
    )
}

export default Products