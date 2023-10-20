import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";




const UpdateProduct = () => {

    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")

    const product = useLoaderData()
    const { _id,name, productImg, price, productType, brandName, brandImg, description, rating } = product

    const handleUpdateProduct = e => {
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

        const updatedProduct = {
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

        fetch(`http://localhost:5000/products/${brandName}/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>

            <div >

                <form onSubmit={handleUpdateProduct}>

                    <div className="hero  ">
                        <div className="card  w-full  shadow-2xl bg-gradient-to-r from-indigo-200 to-indigo-100     ">
                            <div className="card-body">

                                <p className="btn btn-neutral w-1/2 mx-auto hover:text-white text-black text-2xl font-bold glass mb-4">
                                    Update a product{" "}
                                </p>
                                <div className="form-control grid grid-cols-2 gap-2">
                                    <input
                                        type="text"
                                        placeholder="Product name"
                                        name="name"
                                        defaultValue={name}
                                        className="input input-bordered bg-white text-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Product Photo URL"
                                        name="productImg"
                                        defaultValue={productImg}
                                        className="input input-bordered bg-white text-black"
                                    />
                                </div>

                                <div className="form-control grid grid-cols-2 gap-2">
                                    <Select
                                        label="Brand Name"
                                        onChange={(value => setBrand(value))}
                                        defaultValue={brandName}
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
                                        defaultValue={brandImg}
                                        className="input input-bordered bg-white text-black"
                                    />
                                </div>
                                <div className="form-control grid grid-cols-2 gap-2">
                                    <Select
                                        label="Product Type"
                                        onChange={(value => setType(value))}
                                        defaultValue={productType}
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
                                        defaultValue={price}
                                        className="input input-bordered bg-white text-black"
                                    />
                                </div>
                                <div className="form-control grid grid-cols-2 gap-2">
                                    <input
                                        type="text"
                                        placeholder="Short description"
                                        name="description"
                                        defaultValue={description}
                                        className="input input-bordered bg-white text-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Rating"
                                        name="rating"
                                        defaultValue={rating}
                                        className="input input-bordered bg-white text-black"
                                    />
                                </div>

                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-block">Login</button> */}
                                    <input type="submit" className="btn btn-block bg-blue-gray-500 border-0 hover:bg-blue-gray-300 text-white" value="Update product" />
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

export default UpdateProduct;