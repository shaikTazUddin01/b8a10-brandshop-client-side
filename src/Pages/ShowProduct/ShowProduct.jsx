import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const ShowProduct = () => {
    const brandItems = useLoaderData()
    return (
        <div className="min-h-[89vh]">
            <div className="grid grid-cols-3 gap-4 my-20 max-w-7xl mx-auto">
            {
                brandItems?.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default ShowProduct;