import { Carousel } from "@material-tailwind/react";

const Banner = () => {
    return (
        <div>

            <Carousel className="rounded-xl">
                <img
                    src="https://imageupload.io/ib/72muVgnspoRRCR1_1697719810.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://imageupload.io/ib/8nsdsuaRHXk1Cew_1697719864.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://imageupload.io/ib/Q0bTHydsBJzZFRO_1697719896.jpg" 
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        
        </div>
    );
};

export default Banner;