import "./Error.css"

const Error = ({ errorMessage }) => {
  return (
    <div className="error">
      <h2>{errorMessage}</h2>
    </div>
  )
}

export default Error;