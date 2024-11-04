import Banner from "../Components/Banner"
import Hero from "../Components/Hero"
import { useLoaderData } from "react-router-dom";
import ProductsSection from "../Components/ProductsSection";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
        <Banner/>
        <Hero/>
        <ProductsSection category={data}/>
    </div>
  )
}

export default Home