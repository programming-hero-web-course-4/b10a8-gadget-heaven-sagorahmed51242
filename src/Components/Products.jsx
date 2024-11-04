import { useLoaderData, useParams } from "react-router-dom"
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
    const data = useLoaderData();
    const { category } = useParams();

    const [products, setProducts] = useState([data]);
    const [isAll, setIsAll] = useState(false);

    useEffect(() => {
        if (category) {
            if (category === "All Products") {
                let shuffledArray = [...data];
                for (let i = shuffledArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
                }
                if(isAll){
                    setProducts(shuffledArray);
                }else{
                    setProducts(shuffledArray.slice(0, 6));
                }

            } else {
                const newData = [...data].filter((item) => (item.category === category))
                if (isAll) {
                    setProducts(newData);
                } else {
                    setProducts(newData.slice(0, 6));
                }
            }

        } else {
            let shuffledArray = [...data];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            if (isAll) {
                setProducts(shuffledArray);
            } else {
                setProducts(shuffledArray.slice(0, 6));
            }
        }
    }, [category, data, isAll])

    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {products.map((item, index) => (<Product key={index} product={item} />))}
            </div>

            <div className="text-center">
                <button onClick={() => setIsAll(true)} className="bg-gradient-to-r hover:text-white hover:from-purple-700 hover:to-pink-500  transition duration-300 text-xl border px-4 py-2 rounded-full border-purple-600 mt-10 text-purple-600">Show All</button>
            </div>
        </>
    )
}

export default Products