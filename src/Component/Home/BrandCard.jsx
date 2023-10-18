// import { AiOutlineArrowRight } from 'react-icons/ai';

const BrandCard = ({ brand }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-lg shadow-[#353535] hover:shadow-xl hover:shadow-[#353535]">
                <figure className="">
                    <img src={brand?.image} alt="Shoes" className="rounded-t-xl h-[250px] w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title -mt-2">{brand?.category_name}</h2>
                    {/* <div className="card-actions">
                        <button className="py-2 px-3 bg-[#353535] rounded-md text-white flex justify-center items-center gap-2">Show Details
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BrandCard;