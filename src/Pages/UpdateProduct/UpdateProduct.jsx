import bg from '../../assets/img/bg/d.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription } = product
    const handleProductUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const typeOfProduct = form.typeOfProduct.value;
        const imageUrl = form.imageUrl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        // const shortDescription = form.shortDescription.value;

        const updateProduct = { name, brandName, typeOfProduct, imageUrl, price, rating }
        fetch(` https://brand-shop-server-1ongval6u-taz-uddins-projects.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("successFully updated")
                }
            }
            )
    }
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover min-h-[100vh]'>
            <div className='mx-auto bg-[#05050577] min-h-[100vh]' >
                <div className="mx-2 md:py-10 px-2">
                    <div className="hero-content flex-col w-full mx-auto">
                        <div className="card flex-shrink-0 w-[95%] md:w-1/2 shadow-2xl bg-[#ffffff86] ">
                            <div className='rounded-2xl'>
                                <div className="text-center lg:text-left rounded-t-lg  py-5 bg-[#383838]">
                                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-4 md:px-0">Update Product</h1>
                                </div>
                                <form className="card-body" onSubmit={handleProductUpdate}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" defaultValue={name} className="input input-bordered" name='name' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Brand Name</span>
                                        </label>
                                        <select name="brandName" className='input input-bordered' defaultValue={brandName}>
                                            <option value="">--Select a Brand--</option>
                                            <option value="apple">Apple</option>
                                            <option value="samsung">Samsung</option>
                                            <option value="google">Google</option>
                                            <option value="sony">Sony</option>
                                            <option value="intel">Intel</option>
                                            <option value="walton">Walton</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Type Of Product</span>
                                        </label>
                                        <input type="text" placeholder="Type of product" defaultValue={typeOfProduct} className="input input-bordered" name='typeOfProduct' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Image Url</span>
                                        </label>
                                        <input type="text" placeholder="Image Url" defaultValue={imageUrl} className="input input-bordered" name='imageUrl' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Price</span>
                                        </label>
                                        <input type="number" placeholder="Product Price" defaultValue={price} className="input input-bordered" name='price' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Rating</span>
                                        </label>
                                        <input type="Rating" placeholder="Rating" defaultValue={rating} className="input input-bordered " name='rating' required />

                                    </div>
                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Short description</span>
                                        </label>
                                        <textarea name="shortDescription" placeholder='Short description' defaultValue={shortDescription} cols="30" rows="10" className='input input-bordered pt-3'></textarea>

                                    </div> */}
                                    <div className="form-control mt-2">
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#383838]" type='submit'>Update</button>
                                    </div>
                                    <ToastContainer></ToastContainer>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;