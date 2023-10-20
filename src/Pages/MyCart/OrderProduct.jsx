import Swal from 'sweetalert2'


const OrderProduct = ({ order, setOrder ,orders}) => {
    const { _id, name, brandName, typeOfProduct, imageUrl, price, rating, shortDescription } = order
  
    console.log(orders);
  
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/order/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = orders.filter(order => order._id !== id);
                            setOrder(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // const remaining=coffees.filter(cof=>cof._id !== _id)
                            // setCoffees(remaining)
                        }
                    })


            }
        })
    }
    return (
        <div>
            <div className="card card-side shadow-lg hover:shadow-xl 
            shadow-[#383838] hover:shadow-[#383838] flex flex-col md:flex-row">
                <figure className='border'><img src={imageUrl?imageUrl:""} className='h-[200px]' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className='text-[#4b4b4b] font-semibold -mt-2'>{brandName}</h2>
                <p>{
                    shortDescription.slice(0,50)
                    }...</p>
                    <div className="card-actions justify-end mx-auto md:mx-0">
                        <button className="bg-red-700 text-white rounded-md 
                        py-2 px-3
                        " onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;