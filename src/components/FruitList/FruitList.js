import "./FruitList.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import FruitCard from "../FruitCard/FruitCard";
import Swal from "sweetalert2";

const FruitList = () => {
  const {
    errorMessage,
    filteredFruits,
    isLoading,
    emailAddress,
    setEmailAddress,
  } = useContext(DataContext);

  useEffect(() => {
    if (!emailAddress) {
      fireLogin();
    }
  }, []);

  const fireLogin = () => {
    Swal.fire({
      title: "Please enter your email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    }).then((result) => {
      setEmailAddress(result.value);
    });
  };

  return (
    <main>
      <div className="content-container fade-in">
        {!errorMessage && !isLoading && (
          <div className="main-heading">
            <h2>Select a fruit and add it to the basket</h2>
          </div>
        )}
        {isLoading && <Loader />}
        {errorMessage && <Error errorMessage={errorMessage} />}
        {filteredFruits && (
          <div className="fruit-list">
            {filteredFruits.map((fruit) => (
              <FruitCard
                key={fruit.id}
                id={fruit.id}
                name={fruit.name}
                nutritions={fruit.nutritions}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default FruitList;
