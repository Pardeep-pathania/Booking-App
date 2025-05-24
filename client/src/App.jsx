import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listingpage1" element={<ListingPage1/>} />
        <Route path="/listingpage2" element={<ListingPage2/>} />
      </Routes>
    </div>
  );
};

export default App;
