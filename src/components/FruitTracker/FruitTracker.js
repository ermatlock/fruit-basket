import "./FruitTracker.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import TrackedCard from "../TrackedCard/TrackedCard";
import Swal from "sweetalert2";

const FruitTracker = () => {
  const { trackedFruits, emailAddress, setEmailAddress } =
    useContext(DataContext);

  useEffect(() => {
    if (!emailAddress) {
      fireLogin();
    }
  }, []);

  const fireLogin = (e) => {
    Swal.fire({
      title: "Please enter your email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    }).then((result) => {
      // e.preventDefault();
      setEmailAddress(result.value);
    });
  };

  return (
    <main>
      <div className="content-container fade-in">
        <div className="main-heading">
          {emailAddress && <h2>Welcome {emailAddress}!</h2>}
          <h2>Keep track of all your available fruits!</h2>
        </div>
        <div className="fruit-list">
          {trackedFruits.map((fruit) => (
            <TrackedCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              nutritions={fruit.nutritions}
              stock={fruit.stock}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FruitTracker;
