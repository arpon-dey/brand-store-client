import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import Brands from "../pages/Brands/Brands";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: ()=> fetch("http://localhost:5000/products")
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/products/:brandName',
                element: <Brands></Brands>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`),
                
            },
            {
                path: '/products/:brandName/:id',
                element: <ProductDetails></ProductDetails>,
                // loader: ()=>fetch('http://localhost:5000/products')
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}/${params.id}`) 
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