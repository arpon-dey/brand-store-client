import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import Brands from "../pages/Brands/Brands";
import Home from "../pages/Home/Home";

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
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
            }

        ]
    },
]);

export default router;