import { Routes, Route } from "react-router-dom";
import { DataContextProvider } from "../../contexts/DataContext";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FruitList from "../FruitList/FruitList";
import FruitTracker from "../FruitTracker/FruitTracker";

const App = () => {
  return (
    <div className="App">
      <DataContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<FruitList />} />
          <Route path="/fruit-tracker" element={<FruitTracker />} />
        </Routes>
        <Footer />
      </DataContextProvider>
    </div>
  );
};

export default App;
