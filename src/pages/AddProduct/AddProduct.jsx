import { Option, Select } from "@material-tailwind/react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const productImg = form.productImg.value;
        const brandImg = form.brandImg.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const brandName = brand
        const productType = type
        const email= user.email
        const product = {
            name,
            productImg,
            brandName,
            brandImg,
            productType,
            price,
            description,
            rating,
            email
        };

        console.log(product);

        fetch('https://brand-store-server-rlg1n5ykx-arpon-durjoy.vercel.app/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then((res) => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product added successfully',
                    'success'
                  )
            }
        })
}
return (
    <div  className="">
        <Navbar></Navbar>

        <div>

            <form onSubmit={handleAddProduct}>
               
                
                    <div className="card  w-full  shadow-2xl bg-gradient-to-r from-indigo-200 to-indigo-100     ">
                        <div className="card-body">
                            
                            <p className="btn btn-neutral w-1/2 mx-auto hover:text-white text-black text-2xl font-bold glass mb-4">
                                Add a product{" "}
                            </p>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    placeholder="Product name"
                                    name="name"
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Product Photo URL"
                                    name="productImg"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <Select
                                    label="Brand Name"
                                    onChange={(value => setBrand(value))}
                                    className="bg-white p-5 "
                                >
                                    <Option value="Samsung">Samsung</Option>
                                    <Option value="Apple">Apple</Option>
                                    <Option value="OnePlus">OnePlus</Option>
                                    <Option value="Xiaomi">Xiaomi</Option>
                                    <Option value="Huawei">Huawei</Option>
                                    <Option value="Honor">Honor</Option>

                                </Select>
                                <input
                                    type="text"
                                    placeholder="Brand image URL"
                                    name="brandImg"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <Select
                                    label="Product Type"
                                    onChange={(value => setType(value))}
                                    className="bg-white p-5 "
                                >
                                    <Option value="Phone">Phone</Option>
                                    <Option value="Tablet">Tablet</Option>
                                    <Option value="Headphone">Headphone</Option>
                                    <Option value="Buds">Buds</Option>
                                </Select>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    name="price"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    placeholder="Short description"
                                    name="description"
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Rating"
                                    name="rating"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-block">Login</button> */}
                                <input type="submit" className="btn btn-block bg-blue-gray-500 border-0 hover:bg-blue-gray-300 text-white" value="Add product" />
                            </div>
                        </div>
                    </div>
                
            </form>
        </div>
        <Footer></Footer>
    </div>
);
};

export default AddProduct;