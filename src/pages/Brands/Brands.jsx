import { Carousel } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SingleProducts from "./SingleProducts";

const Brands = () => {
    const params = useLoaderData();
    // console.log(params);


    let brandName = ""
    if (params.length > 0) {
        brandName = params[0].brandName;
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="bg-blue-gray-300 dark:bg-blue-gray-100 dark:text-black text-black text-2xl font-semibold w-1/4 text-center mx-auto p-3 glass my-8 rounded-xl">{brandName}</h2>
            <Carousel className="rounded-xl">
                <img
                    src="https://i.ibb.co/b5B0C62/24750209-6981233.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://i.ibb.co/hX1FZPn/9448120-4183738.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://i.ibb.co/G0Sxr8g/34013400-black-friday-web-banner-34.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
            <h2 className="bg-blue-gray-300 dark:bg-blue-gray-100 dark:text-black text-2xl font-semibold w-1/4 text-black text-center mx-auto p-3 glass my-8 rounded-xl">{brandName}'s products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  ">
                {
                    params.map(items => <SingleProducts key={items._id} items={items}></SingleProducts>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Brands;
