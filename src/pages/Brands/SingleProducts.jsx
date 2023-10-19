import { Button, Card, CardBody, CardFooter, CardHeader, Typography, } from "@material-tailwind/react";
import React from 'react';

const SingleProducts = ({ items }) => {
    const { _id, brandName, name, productImg, productType, price, rating } = items
    return (
        <div>
            
            <Card className="mt-6 w-80">
                <CardHeader color="blue-gray" className="relative h-44">
                    <img
                        src={productImg}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                        {name}
                    </Typography>
                    <div className="flex gap-8 justify-center">
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        Type: {productType}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        Price: TK {price}
                    </Typography>
                    </div>
                    <div className="flex gap-8 justify-center">
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        Brand: {brandName}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        Rating: {rating}
                    </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex gap-4 justify-center">
                    {/* <div className="s"> */}
                        <Button>Details</Button>
                        <Button>Update</Button>
                        {/* </div> */}
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleProducts;