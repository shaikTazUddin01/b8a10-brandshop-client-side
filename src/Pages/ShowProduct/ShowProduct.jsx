import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { AiOutlineArrowRight } from 'react-icons/ai';


const ShowProduct = () => {
    const brandItems = useLoaderData()
    // console.log(brandItems)


    return (
        <div className="min-h-[89vh]">
            {
                brandItems.length>0 ?
                    <div className="grid grid-cols-3 gap-4 my-20 max-w-7xl mx-auto">
                        {
                            brandItems?.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                        }
                    </div>
                    :
                    <div className="text-center min-h-[90vh] flex items-center flex-col justify-center">
                        <h1 className="text-3xl ">No Product Added..!</h1>
                        <h1 className="text-4xl ">Please Add Some product</h1>
                        <Link to={'/addProduct'} className="flex justify-center">
                        <button className="bg-[#383838] py-2 px-3 text-white 
                        rounded-md mt-2 flex justify-center items-center gap-2">
                            Add Product
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default ShowProduct;