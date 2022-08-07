import "./Error.css";

const Error = ({ errorMessage }) => {
  return (
    <div className="container">
      <div className="error">
        <h2>{errorMessage}</h2>
      </div>
    </div>
  );
};

export default Error;
