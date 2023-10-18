import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import user from '../../../public/user.json';

const Navbar = () => {
    const navItems =    <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/addProduct'>Add product</Link></li>
                            <li><Link to='/addProduct'>My cart</Link></li>
                            <li><Link to='/addProduct'>Blog</Link></li>
                        </>
                        // const userJsonUrl = '/user.json?url'
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Tecsus </a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu text-lg font-semibold menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to='/login'><Lottie animationData={user} className="w-14"  ></Lottie></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;