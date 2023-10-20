import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const brandNamesUnique = new Set();
                const uniqueCategories = data.filter(category => {
                    if (brandNamesUnique.has(category.brandName)) {
                        return false; // Already seen this brand name
                    } else {
                        brandNamesUnique.add(category.brandName);
                        return true; // First time seeing this brand name
                    }
                });

                setCategories(uniqueCategories);
            });
    }, [])

    if(categories<0){
        Swal.fire(
            'Good job!',
            'There is no products',
            'error'
          )
    }


    return (
        <div>
            <h2 className='bg-blue-gray-400 text-2xl font-semibold w-1/4 text-center mx-auto p-3 glass my-8 rounded-xl'>Our Brands</h2>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 ml-0   md:ml-16'>
                {
                    categories.map(category =><SingleCategory 
                        key={category._id} 
                        category={category}
                        ></SingleCategory> )
                }
            </div>


        </div>
    );
};

export default Categories;