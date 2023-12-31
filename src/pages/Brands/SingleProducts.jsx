import { Button, Card, CardBody, CardFooter, CardHeader, Typography, } from "@material-tailwind/react";
import React from 'react';
import { Link } from "react-router-dom";

const SingleProducts = ({ items }) => {
    const { _id, brandName, name, productImg, productType, price, rating } = items
    
    return (
        <div className=" mx-auto mb-8 ">
            
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
                    <Link to={`/products/${brandName}/${_id}`}>  <Button>Details</Button></Link>
                    <Link to={`/updateProduct/${brandName}/${_id}`}>  <Button>Update</Button></Link>
                        
                        {/* </div> */}
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleProducts;