import "./Footer.css";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <h2 className="footer-text">
        FruitBasket | Developed by Eric Matlock |
        <a href="https://github.com/ermatlock" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github social icon" />
        </a>
        |
        <a href="https://www.linkedin.com/in/ericmatlock/" target="blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin social icon" />
        </a>
      </h2>
    </footer>
  );
};

export default Footer;
