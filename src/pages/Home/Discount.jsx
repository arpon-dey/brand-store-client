
import Countdown from "react-countdown";

const Discount = () => {
   
    return (
        <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center my-10"
        style={{backgroundImage: "url('https://i.ibb.co/6DMy5V2/13722111-5332367.jpg')", height: "400px"}}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-18">
                <div className="text-white my-40"><h2 className="text-4xl"><span className="text-6xl font-semibold">30%</span> Off In June~July <br /> For <span className="font-bold">All tech products</span></h2></div>
                <div className="text-6xl text-white font-bold ">
                    <Countdown  date={Date.now() + 3000000000}>

                    </Countdown>

                </div>
            </div>
          </div>
        </div>
       
    );
};

export default Discount;