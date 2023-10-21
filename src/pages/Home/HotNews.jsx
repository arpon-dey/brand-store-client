import Marquee from "react-fast-marquee";


const HotNews = () => {
    return (
        <div>
            <div className="flex border-1 bg-gray-200 rounded-lg my-2 p-2">
            <button className="btn border-0 bg-red-500 text-white">Upcoming</button>
            <Marquee pauseOnHover={true} speed={200} className="text-red-700 font-semibold">
            <p className="mr-8">🔥 Hot News at Techsus! Discover the latest and greatest in tech innovation right here.</p>
            <p className="mr-8">Stay up to date with the latest tech innovations! </p>
            </Marquee>
          

        </div>
        </div>
    );
};

export default HotNews;