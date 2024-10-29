import "./App.css";
import React, { useState, useEffect } from "react";
import DashBoardHeader from "./components/dashboardHeader";
import DropDown from "./components/dropDown";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Products, { ProductActions } from "./state/slices/products";
import store from "./state/store";
import Product from "./pages/product";
import EventDescription from "./pages/eventDescription";
import Login from "./pages/login";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  return (
    <>
      <Router>
        <DashBoardHeader />
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/dashboard" element={<Product />} />
          <Route path="/events/description" element={<EventDescription />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
