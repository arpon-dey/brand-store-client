import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import React from 'react';
import { Link } from "react-router-dom";

const SingleCategory = ({ category }) => {
    // console.log(category);
    const { _id, brandName, brandImg } = category
    return (
        <div className="ml-16 md:ml-0"> 
            <Link to={`/products/${brandName}`}>
            <Card className="mt-6 w-72">
                <CardHeader color="blue-gray" className="relative ">
                    <img
                        src={brandImg}
                        alt="card-image"
                        className="relative h-40"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                        {brandName}
                    </Typography>
                </CardBody>

            </Card>
            </Link>

        </div>
    );
};

export default SingleCategory;