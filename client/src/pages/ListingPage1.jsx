import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ListingPage1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rent: '',
    city: '',
    landmark: '',
    category: '',
    image1: '',
    image2: '',
    image3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

  return (
    <div className="relative">
      {/* Floating Back Button */}
      

      {/* Form Content */}
      <div className="mt-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg max-h-[80vh] overflow-y-auto">
        
        <form  className="space-y-4">
            <div
        className="w-[50px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
        onClick={() => navigate('/')}
      >
        <FaArrowLeft className="text-white" />
      </div>
      <div className='w-[200px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] right-[10px] rounded-2xl flex items-center justify-center'>
        Setup your Home
      </div>
            <h2 className="text-2xl font-semibold text-center mb-6 ">Create a New Listing</h2>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Rent</label>
            <input
              id="rent"
              name="rent"
              type="number"
              value={formData.rent}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
            <input
              id="landmark"
              name="landmark"
              type="text"
              value={formData.landmark}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="image1" className="block text-sm font-medium text-gray-700">Image 1 URL</label>
            <input
              id="image1"
              name="image1"
              type="file"
             
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="image2" className="block text-sm font-medium text-gray-700">Image 2 URL</label>
            <input
              id="image2"
              name="image2"
              type="file"
             
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="image3" className="block text-sm font-medium text-gray-700">Image 3 URL</label>
            <input
              id="image3"
              name="image3"
              type="file"
              
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <Link to={'/listingpage2'}
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Listing
          </Link>
        </form>
      </div>    
    </div>
  );  
}
export default ListingPage1;
 
