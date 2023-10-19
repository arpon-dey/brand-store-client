import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SingleProducts from "./SingleProducts";

const Brands = () => {
    const params = useLoaderData();
    // console.log(params);


    let brandName = ""
    if(params.length>0){
        brandName=params[0].brandName;
    }
    

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="bg-blue-gray-300 text-2xl font-semibold w-1/4 text-center mx-auto p-3 glass my-8 rounded-xl">{brandName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    params.map(items => <SingleProducts key={items._id} items={items}></SingleProducts>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Brands;
