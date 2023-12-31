import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const { _id, name, brandName, typeOfProduct, price, rating, imageUrl } = item
    return (
        <div>
            <div className="card bg-base-100 shadow-lg shadow-[#353535] hover:shadow-xl hover:shadow-[#353535] min-h-[500px]">
                <figure className="px-5 pt-10 h-[250px]">
                    <img src={imageUrl ? imageUrl : ""} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title  text-[#1f1f1f]">{name}</h2>
                        <h2 className="card-title uppercase text-[#555554]">{brandName}</h2>
                    </div>
                    <h2 className="card-title text-[#747474] font-semibold  text-[19px]">Type :
                        <span className='text-[17px]'>{typeOfProduct}</span>
                    </h2>
                    <div className='flex justify-between'>
                        <h5 className='card-title text-[#1f1f1f] font-semibold  text-[19px]'>
                            <span className='text-[17px] text-[#2d2d2d]'>${price}</span>
                        </h5>
                        <h5 className='text-sm'>
                            <Rating
                                emptySymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                }
                                fullSymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#ff6600"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                                initialRating={rating}
                                readonly
                            />
                        </h5>
                    </div>
                    <div className="card-actions flex flex-col md:flex-row justify-between items-center">
                        <Link to={`/productDetails/${_id}`}>
                            <button className="bg-[#173a68] text-white 
                            py-2 px-3 rounded-md">Show Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="bg-[#156b21] text-white
                            py-2 px-3 rounded-md
                            ">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;