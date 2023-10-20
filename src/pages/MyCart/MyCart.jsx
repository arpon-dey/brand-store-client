import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SingleProductInCart from "./SingleProductInCart";

const MyCart = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const cartProducts = useLoaderData()


    const [cartItems, setCartItems] = useState(cartProducts)

    if (!user) {
        navigate('/')
    }



    const handleDeleteProduct = _id => {
        console.log(_id);



        fetch(`http://localhost:5000/myCart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                    )
                    setCartItems((prevItems) =>
                        prevItems.filter((item) => item._id !== _id)
                    );

                }
            })

    }



    const userCartItems = cartItems.filter((item) => item.email === user?.email);
    console.log(userCartItems);

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 gap-8">
                {userCartItems.length > 0 ? (
                    userCartItems.map((userCartItem) => (
                        <SingleProductInCart
                            key={userCartItem._id}
                            userCartItem={userCartItem}
                            onDelete={handleDeleteProduct}
                        ></SingleProductInCart>
                    ))
                ) : (
                    <h2 className="text-center font-semibold text-2xl">Your cart is empty</h2>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;