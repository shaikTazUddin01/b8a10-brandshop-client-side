import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderProduct from './OrderProduct';

const MyCart = () => {
    const myOrders=useLoaderData()
    const [orders,setOrder]=useState(myOrders)
    return (
        <div className='bg-slate-100'>
            <div className='min-h-screen max-w-7xl mx-auto '>
            <div className='grid grid-cols-2 gap-4 my-20'>
            {
                orders?.map(order=><OrderProduct key={order?._id} order={order} setOrder={setOrder} orders={orders}></OrderProduct>)
            }
        </div>
        </div>
        </div>
    );
};

export default MyCart;