import { Carousel } from "@material-tailwind/react";
import React from 'react';

const Banner = () => {
    return (
        <div>

            <Carousel className="rounded-xl">
                <img
                    src="https://i.ibb.co/9q6h3fP/34013367-black-friday-web-banner-25.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://i.ibb.co/Pgnhnfs/10865896-18899294.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://i.ibb.co/3kJKjHM/18952171-6024800.jpg" 
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        
        </div>
    );
};

export default Banner;