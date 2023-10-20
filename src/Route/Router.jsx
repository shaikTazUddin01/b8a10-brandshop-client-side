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
import PrivateRouter from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=>fetch(' https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/products')
            },
            {
                path: '/myCart',
                element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
                loader:()=>fetch(' https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/order')
            },
            {
                path: '/addProduct',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
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
                loader:({params})=>fetch(` https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/products1/${params.brand}`)
            },
            {
                path:'/productDetails/:id',
                element:<PrivateRouter><ShowProductDetails></ShowProductDetails></PrivateRouter>,
                loader:({params})=>fetch(` https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/products/${params.id}`)
            },
            {
                path:'/updateProduct/:id',
                element:<PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
                loader:({params})=>fetch(` https://brand-shop-server-pakuuj9ls-taz-uddins-projects.vercel.app/products/${params.id}`)
            }
        ]
    }
])

export default Router;