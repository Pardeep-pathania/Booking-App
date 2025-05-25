import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

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
  const [listingData, setListingData] = useState([])
  const [newListData, setNewListData] = useState([])
  const [cardDetails, setCardDetails] = useState(null)

  const navigate = useNavigate()

  const { serverUrl } = useContext(authDataContext);

  const handleAddListing = async () => {
    setAdding(true)
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

      const result = await axios.post(serverUrl + "/listing/add", formData, {
        withCredentials: true,
      });
      setAdding(false)

      console.log(result);

      navigate('/')

      setTitle("")
      setDescription("")
      setFrontEndImage1(null)
      setFrontEndImage2(null)
      setFrontEndImage3(null)
      setBackEndImage1(null)
      setBackEndImage2(null)
      setBackEndImage3(null)
      setRent("")
      setCity("")
      setLandmark("")
      setCategory("")

    } catch (error) {
      console.log(error);
    setAdding(false)

    }
  };


  const handleViewCard = async(id)=>{
    try {
      let result = await axios.get(serverUrl + `/listing/findlistingByid/${id}`,{withCredentials:true})

      setCardDetails(result.data)
      console.log(result)
      navigate("/viewcard")

    } catch (error) {
      console.log(error)
    }
  }


const getListing = async()=>{
  try {

    let result = await axios.get(serverUrl + "/listing/get", {withCredentials:true})

    setListingData(result.data)
    setNewListData(result.data)
    
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  getListing()
},[adding,updating])


  let value = {
    title,setTitle,
    description,setDescription,
    rent,setRent,
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
    adding, setAdding,
    newListData, setNewListData,deleting, setDeleting,
    handleAddListing,updating, setUpdating,
    listingData, setListingData, getListing, handleViewCard, cardDetails, setCardDetails
    
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
