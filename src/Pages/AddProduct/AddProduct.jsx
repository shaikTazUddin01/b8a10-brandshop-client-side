import { Link } from 'react-router-dom';
import bg from '../../assets/img/bg/d.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const handleDataSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        // const  = bName.toLowerCase();
        const typeOfProduct = form.typeOfProduct.value;
        const imageUrl = form.imageUrl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;

        const product = { name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription }
        fetch(' https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast.success("SuccessFully you add a product")
                    form.reset()
                }
            }
            )

    }
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover min-h-[100vh]'>
            <div className='mx-auto bg-[#0505057e] min-h-[100vh] ' >
                <div className="py-10 ">
                    <div className="hero-content flex-col w-full mx-auto">
                        <div className="card flex-shrink-0 w-[95%] md:w-1/2 shadow-2xl bg-[#ffffff8c] ">
                            <div className='rounded-2xl'>
                                <div className="text-center lg:text-left rounded-t-lg  py-5 bg-[#383838]">
                                    <h1 className="text-3xl md:text-5xl font-bold text-center text-white">Add Product</h1>
                                </div>
                                <form className="card-body" onSubmit={handleDataSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Brand Name</span>
                                        </label>
                                        <select name="brandName" className='input input-bordered' required>
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
                                        <input type="text" placeholder="Type of product" className="input input-bordered" name='typeOfProduct' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Image Url</span>
                                        </label>
                                        <input type="text" placeholder="Image Url" className="input input-bordered" name='imageUrl' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Price</span>
                                        </label>
                                        <input type="number" placeholder="Product Price" className="input input-bordered" name='price' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Rating</span>
                                        </label>
                                        <input type="Rating" placeholder="Rating" className="input input-bordered " name='rating' required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Short description</span>
                                        </label>
                                        <textarea name="shortDescription" placeholder='Short description' cols="30" rows="10" className='input input-bordered pt-3 h-20' required></textarea>

                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#383838]" type='submit'>Add Product</button>
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

// export default SignUp;
export default AddProduct;