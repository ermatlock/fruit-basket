// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { fetchData } from "../../apiCalls";
import "./App.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FruitList from "../FruitList/FruitList";
import FruitTracker from "../FruitTracker/FruitTracker";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FruitList />} />
        <Route path="/fruit-tracker" element={<FruitTracker />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
