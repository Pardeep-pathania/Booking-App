import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const listingDataContext = createContext();

const ListingContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] = useState("");
  const [adding, setAdding] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [listingData, setListingData] = useState([]);
  const [newListData, setNewListData] = useState([]);
  const [cardDetails, setCardDetails] = useState(null);
  const [searchData, setSearchData] = useState([]);

  const navigate = useNavigate();

  const { serverUrl } = useContext(authDataContext);

  const handleAddListing = async () => {
    setAdding(true);
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      formData.append("category", category);
      formData.append("image1", backEndImage1);
      formData.append("image2", backEndImage2);
      formData.append("image3", backEndImage3);

      const result = await axios.post(serverUrl + "api/listing/add", formData, {
        withCredentials: true,
      });
      setAdding(false);
      toast.success("Listing Added successfully", {
        position: "top-center",
        autoClose: 700,
      });
      console.log(result);

      navigate("/");

      setTitle("");
      setDescription("");
      setFrontEndImage1(null);
      setFrontEndImage2(null);
      setFrontEndImage3(null);
      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      setRent("");
      setCity("");
      setLandmark("");
      setCategory("");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 700,
      });

      setAdding(false);
    }
  };

  const handleSearch = async (data) => {

    if (!data || data.trim() === "") {
    setSearchData([]); // or set to null/empty as needed
    return;
  }
  
    try {
      let result = await axios.get(
        serverUrl + `api/listing/search?query=${data}`
      );
      setSearchData(result.data);
    } catch (error) {
      setSearchData(null);
    }
  };

  const handleViewCard = async (id) => {
    try {
      let result = await axios.get(
        serverUrl + `api/listing/findlistingByid/${id}`,
        { withCredentials: true }
      );

      setCardDetails(result.data);

      navigate("/viewcard");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 700,
      });
    }
  };

  const getListing = async () => {
    try {
      let result = await axios.get(serverUrl + "api/listing/get", {
        withCredentials: true,
      });

      setListingData(result.data);
      setNewListData(result.data);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 700,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getListing();
  }, [adding, updating]);

  let value = {
    title,
    setTitle,
    description,
    setDescription,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    category,
    setCategory,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    adding,
    setAdding,
    searchData,
    setSearchData,
    newListData,
    setNewListData,
    deleting,
    setDeleting,
    handleAddListing,
    updating,
    setUpdating,
    listingData,
    setListingData,
    getListing,
    handleViewCard,
    cardDetails,
    setCardDetails,
    handleSearch,
  };

  return (
    <div>
      <listingDataContext.Provider value={value}>
        {children}
      </listingDataContext.Provider>
    </div>
  );
};

export default ListingContext;
