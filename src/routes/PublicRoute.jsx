import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import Brands from "../pages/Brands/Brands";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/products/:brandName',
                element: <PrivateRoute><Brands></Brands></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`),
                
            },
            {
                path: '/products/:brandName/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}/${params.id}`) 
            },
            {
                path: '/myCart',
                element:<MyCart></MyCart>,
                loader: ()=>fetch('http://localhost:5000/myCart')
                   
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    },
]);

export default router;