import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const AddProduct = () => {
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
        const product = {
            name,
            productImg,
            brandName,
            brandImg,
            productType,
            price,
            description,
            rating,
        };

        console.log(product);

        fetch('http://localhost:5000/products',{
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
    <div>
        <Navbar></Navbar>

        <div >

            <form onSubmit={handleAddProduct}>
                {/* //onSubmit={handleAddToy} */}
                <div className="hero  ">
                    <div className="card  w-full  shadow-2xl bg-gradient-to-r from-indigo-200 to-indigo-100     ">
                        <div className="card-body">
                            {/* <p className="text-2xl text-center text-black font-bold mb-4">All toys </p> */}
                            <p className="btn btn-neutral w-1/2 mx-auto hover:text-white text-black text-2xl font-bold glass mb-4">
                                Add a product{" "}
                            </p>
                            <div className="form-control grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    placeholder="Product name"
                                    name="name"
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Product Photo URL"
                                    //   onChange={handleImageChange}
                                    name="productImg"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control grid grid-cols-2 gap-2">
                                <Select
                                    label="Brand Name"
                                    onChange={(value => setBrand(value))}
                                    className="bg-white p-5 "
                                >
                                    <Option value="Samsung">Samsung</Option>
                                    <Option value="Apple">Apple</Option>
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
                            <div className="form-control grid grid-cols-2 gap-2">
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
                            <div className="form-control grid grid-cols-2 gap-2">
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
                </div>
            </form>
        </div>
        <Footer></Footer>
    </div>
);
};

export default AddProduct;