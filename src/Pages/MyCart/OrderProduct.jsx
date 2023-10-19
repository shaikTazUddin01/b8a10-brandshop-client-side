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

                fetch(`http://localhost:5000/order/${id}`, {
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
            <div className="card card-side bg-base-100 shadow-lg hover:shadow-xl 
            shadow-[#383838] hover:shadow-[#383838]">
                <figure><img src='https://i.ibb.co/z2L1s8V/download.png' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
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