import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";
import ListingPage3 from "./pages/ListingPage3";
import { userDataContext } from "./context/UserContext";
import MyListing from "./pages/MyListing";
import ViewCard from "./pages/ViewCard";
import MyBooking from "./pages/MyBooking";
import Booked from "./pages/Booked";

const App = () => {

  

const {userData} = useContext(userDataContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listingpage1" element={userData != null ? <ListingPage1/>:<Navigate to = {'/login'}/>} />
        <Route path="/listingpage2" element={userData != null ? <ListingPage2/>:<Navigate to = {'/login'}/>} />
        <Route path="/listingpage3" element={userData != null ? <ListingPage3/>:<Navigate to = {'/login'}/>} />
        <Route path="/mylisting" element={userData != null ? <MyListing/>:<Navigate to = {'/'}/>} />
        <Route path="/viewcard" element={userData != null ? <ViewCard/>:<Navigate to = {'/'}/>} />
        <Route path="/mybooking" element={userData != null ? <MyBooking/>:<Navigate to = {'/'}/>} />
        <Route path="/booked" element={userData != null ? <Booked/>:<Navigate to = {'/booked'}/>} />
      </Routes>
    </div>
  );
};

export default App;
