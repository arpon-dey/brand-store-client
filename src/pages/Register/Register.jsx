import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)


   
      
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log({ name, email, photo, password })

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one capital letter');
            return;
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-]/.test(password)) {

            toast.error('Password must not contain special characters');
            return;
        }

   


        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Registration successful');
            
                if (photo) {
                    // Set photoURL only if a photo is provided
                    updateUserProfile(result.user, {
                        displayName: name,
                        photoURL: photo,
                    }).then(() => {
                        console.log('User profile updated successfully');
                    });
                } 
                else {
                    // If no photo is provided, set only the displayName
                    updateUserProfile(result.user, {
                        displayName: name,
                    }).then(() => {
                        console.log('User profile updated successfully');
                    });
                }
               
            })
            
          
            .catch((error) => {
                console.log(error.message);
            });

          

    }

    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer
                position="bottom-left"
                theme="dark"

            />
            <section className=" ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-gradient-to-r from-blue-gray-500 to-gray-300   rounded-lg shadow-xl   md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-black md:text-2xl ">
                                Signup
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleRegister}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="formFile"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Photo URL
                                    </label>
                                    <input
                                        type="file"
                                        name="photo"
                                        // onChange={handleImageChange}
                                        id="formFile"
                                        placeholder="Enter your image"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "

                                    />
                                </div>
                                <input className="btn btn-block bg-gradient-to-r from-teal-200 to-teal-600  border-0 text-white" type="submit" value='Sign up'>

                                </input>

                                <p className="text-sm font-semibold text-black ">
                                    Already Registerd?{" "}
                                    <Link className="font-bold text-xl text-orange-800 hover:underline" to='/login'>
                                        Log in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Register;