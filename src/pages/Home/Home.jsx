import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Banner from './Banner';
import Categories from './Categories';
import Discount from './Discount';
import HotNews from './HotNews';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <HotNews></HotNews>
           <Banner></Banner>
           <Discount></Discount>
           <Categories></Categories>
           <Footer></Footer>
        </div>
    );
};

export default Home;