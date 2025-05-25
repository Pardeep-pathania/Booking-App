import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { listingDataContext } from "../context/ListingContext";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";

const ViewCard = () => {
  const navigate = useNavigate();
  let { userData } = useContext(userDataContext);
  let { cardDetails } = useContext(listingDataContext);
  let { updating, setUpdating } = useContext(listingDataContext);
  let { deleting, setDeleting } = useContext(listingDataContext);
  let [updatePopup, setUpdatePopup] = useState(null);
  let [bookingPopup, setBookingPopup] = useState(null);
  let { serverUrl } = useContext(authDataContext);

  const [title, setTitle] = useState(cardDetails.title);
  const [description, setDescription] = useState(cardDetails.description);
  const [rent, setRent] = useState(cardDetails.rent);
  const [city, setCity] = useState(cardDetails.city);
  const [landmark, setLandmark] = useState(cardDetails.landmark);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);

  const handleUpdateListing = async () => {
    setUpdating(true)
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      if(backEndImage1){formData.append("image1", backEndImage1)};
     if(backEndImage2){formData.append("image2", backEndImage2)};
     if(backEndImage2){formData.append("image3", backEndImage3)};

      const result = await axios.put(serverUrl + `/listing/update/${cardDetails._id}`, formData, {
        withCredentials: true,
      });

      console.log(result);
      setUpdating(false)
      navigate('/');
      resetForm();
    } catch (error) {
        setUpdating(false)
      console.log(error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setBackEndImage1(null);
    setBackEndImage2(null);
    setBackEndImage3(null);
    setRent("");
    setCity("");
    setLandmark("");
  };

  const handleDeleteListing = async()=>{
    setDeleting(true)
    try {
         const result = await axios.delete(serverUrl + `/listing/deletelisting/${cardDetails._id}`,{
        withCredentials: true,
      });
      console.log(result.data)
      navigate('/')
      setDeleting(false)
      alert("Listing deleted successfully")
    } catch (error) {

      setDeleting(false)
        console.log(error)
    }
  }


  const handleImage1 = (e) => setBackEndImage1(e.target.files[0]);
  const handleImage2 = (e) => setBackEndImage2(e.target.files[0]);
  const handleImage3 = (e) => setBackEndImage3(e.target.files[0]);

  return (
    <div className="w-full h-screen bg-white flex flex-col gap-2 items-center justify-center relative overflow-auto">
      <div
        className="w-12 h-12 cursor-pointer bg-red-600 absolute top-5 left-5 rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="text-white" />
      </div>

      <div className="w-11/12 flex items-center justify-start text-xl md:w-4/5 mb-2">
        <h1 className="text-2xl text-slate-800 text-ellipsis text-nowrap overflow-hidden">
          {`In ${cardDetails.landmark.toUpperCase()}, ${cardDetails.city.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-11/12 h-96 flex items-center justify-center flex-col md:flex-row">
        <div className="w-full h-2/3 md:w-3/5 md:h-full overflow-hidden flex items-center justify-center border border-amber-200 bg-red-200">
          <img src={cardDetails.image1} alt="first pic" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-1/3 flex items-center justify-center md:w-2/5 md:h-full md:flex-col bg-black">
          <div className="w-full h-full overflow-hidden flex items-center justify-center border border-amber-200">
            <img src={cardDetails.image2} alt="second pic" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full overflow-hidden flex items-center justify-center border border-amber-200">
            <img src={cardDetails.image3} alt="third pic" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-11/12 flex items-center justify-start text-lg md:text-xl md:w-4/5">
        {`${cardDetails.title.toUpperCase()} ${cardDetails.category.toUpperCase()}, ${cardDetails.landmark.toUpperCase()}`}
      </div>
      <div className="w-11/12 flex items-center justify-start text-lg md:text-xl md:w-4/5">
        {`${cardDetails.description.toUpperCase()}`}
      </div>
      <div className="w-11/12 flex items-center justify-start text-lg md:text-xl md:w-4/5">
        {`Rs. ${cardDetails.rent}/day`}
      </div>
      <div className="w-11/12 h-12 flex items-center justify-around">
        {cardDetails.host === userData._id ? (
          <button
            className="px-8 py-2 bg-red-600 text-white text-lg rounded-lg"
            onClick={() => setUpdatePopup((prev) => !prev)}
          >
            Edit Listing
          </button>
        ) : (
          <button className="px-8 py-2 bg-red-600 text-white text-lg rounded-lg" onClick={() => setBookingPopup((prev) => !prev)}>
            Reserve
          </button>
        )}
      </div>

      {/* Update listing Page */}
      {updatePopup && (
        <div className="w-full h-full flex items-center justify-center bg-opacity-70 absolute top-0 z-50 backdrop-blur-md">
          <RxCross2
            className="w-8 h-8 cursor-pointer bg-red-600 absolute top-5 left-5 rounded-full flex items-center justify-center"
            onClick={() => setUpdatePopup(false)}
          />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-slate-500 text-white p-6 rounded-lg shadow-lg space-y-4 w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Update Listing</h2>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                placeholder="_bhk house or best title"
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="rent" className="block text-sm font-medium text-gray-300">Rent</label>
              <input
                id="rent"
                name="rent"
                type="number"
                value={rent}
                placeholder="Rs____/day"
                onChange={(e) => setRent(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300">City</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="city, country"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="landmark" className="block text-sm font-medium text-gray-300">Landmark</label>
              <input
                id="landmark"
                name="landmark"
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="image1" className="block text-sm font-medium text-gray-300">Image 1</label>
              <input
                id="image1"
                name="image1"
                type="file"
                onChange={handleImage1}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="image2" className="block text-sm font-medium text-gray-300">Image 2</label>
              <input
                id="image2"
                name="image2"
                type="file"
                onChange={handleImage2}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="image3" className="block text-sm font-medium text-gray-300">Image 3</label>
              <input
                id="image3"
                name="image3"
                type="file"
                onChange={handleImage3}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="w-[100] flex items-center justify-center gap-1 mt-4 ">
                <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleUpdateListing}
              disabled={updating}
            >
              {updating?"Update Listing":"Update Listing"}
            </button>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={deleting}
              onClick={handleDeleteListing}
            >
            {deleting?"Deleting...":"Delete Listing"}
            </button>
            </div>
          </form>
        </div>
      )}

     { bookingPopup && <div className="w-full h-full flex items-center justify-center bg-opacity-70 absolute top-0 z-50 backdrop-blur-md">

        
          <RxCross2
            className="w-8 h-8 cursor-pointer bg-red-600 absolute top-5 left-5 rounded-full flex items-center justify-center"
            onClick={() => setBookingPopup(false)}
          />
        <div>

        </div>
     <form className="max-w-[450px] w-[90%] h-[450px] overflow-auto bg-[#f7fbfcfe] p-[20px] rounded-lg flex items-center justify-start flex-col gap-2 border border-[#dedddd] shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">

    <h1 className="w-[100%] text-center text-lg font-semibold">Confirm & Book</h1>
    <div className="w-full">
        <h3 className="text-lg font-medium text-gray-700">Your Trip</h3>
        <div className="mt-4">
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-600">Check In</label>
            <input
                id="checkIn"
                name="checkIn"
                type="date"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div className="mt-4">
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-600">Check Out</label>
            <input
                id="checkOut"
                name="checkOut"
                type="date"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div className="mt-6">
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200">
                Book Now
            </button>
        </div>
    </div>
</form>

      
      </div>
}
    </div>
  );
};

export default ViewCard;

