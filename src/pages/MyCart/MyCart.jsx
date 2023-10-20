import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MyCart = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const cartProducts = useLoaderData()
    if(!user){
        navigate('/')
    }

    console.log(cartProducts);
    const userCartItems = cartProducts.filter(item => item.email === user?.email)
    console.log(userCartItems);

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    userCartItems.map(userCartItem =>
                        <div key={userCartItem._id}>



                            <Card className="w-full max-w-[48rem] flex-row">
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                                >
                                    <img
                                        src={userCartItem.productImg}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                        {userCartItem.brandName}
                                    </Typography>
                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                        {userCartItem.name}
                                    </Typography>
                                    <Typography color="gray" className="mb-8 font-normal">
                                        {userCartItem.description}
                                    </Typography>
                                    <Typography className="font-semibold">
                                        Price: ${userCartItem.price}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;