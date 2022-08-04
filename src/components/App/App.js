import { Routes, Route } from "react-router-dom";
import "./App.css";
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
