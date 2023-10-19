import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ShowProduct from "../Pages/ShowProduct/ShowProduct";
import ShowProductDetails from "../Pages/ShowProductDetails/ShowProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=>fetch('http://localhost:5000/products')
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>

            },
            {
                path:'/showProduct/:brand',
                element:<ShowProduct></ShowProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products1/${params.brand}`)
            },
            {
                path:'/productDetails/:id',
                element:<ShowProductDetails></ShowProductDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/updateProduct/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default Router;