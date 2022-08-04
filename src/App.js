import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
