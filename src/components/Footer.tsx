import { UiButton } from "../components/UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = (navigateTo: string) => () => {
    switch (navigateTo) {
      case "to_the-top": {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      }
      default: {
        navigate(navigateTo);
        break;
      }
    }
  };

  const getCurrentYear = (): number => new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--wide">
          <UiButton
            label={
              <p>
                To the top&emsp;
                <FontAwesomeIcon icon={faChevronUp} />
              </p>
            }
            variant="secondary"
            theme="dark"
            onClick={handleButtonClick("to_the-top")}
          />
        </div>
        <p>&copy; 2021 - {getCurrentYear()} Yusuf Erman ERGÖZ</p>

        <UiButton
          label="Privacy policies"
          variant="inline"
          theme="dark"
          onClick={handleButtonClick("privacy-policies")}
        />
      </div>
    </footer>
  );
};

export default Footer;
