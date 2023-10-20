import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const SingleProductInCart = ({ userCartItem, onDelete }) => {
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    onDelete(_id);
                }
            })
    }


    return (
        <div>
            <div>



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
                        <button
                            onClick={() => handleDelete(userCartItem._id)}
                            className="btn bg-deep-orange-600 hover:bg-deep-orange-400 text-white font-semibold mt-2"
                        >Delete</button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default SingleProductInCart;