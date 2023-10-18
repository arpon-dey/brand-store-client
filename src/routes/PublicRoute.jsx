import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import Home from "../pages/Home/Home";

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
                element: <AddProduct></AddProduct>,
            }

        ]
    },
]);

export default router;