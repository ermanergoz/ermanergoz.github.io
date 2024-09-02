import { UiButton } from "../components/UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleButtonClick =
    (buttonLabel: string = "") =>
    () => {
      console.log(`${buttonLabel} is clicked`);
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
            onClick={handleButtonClick("To the top")}
          />
        </div>
        <p>&copy; 2021 - {getCurrentYear()} Yusuf Erman ERGÖZ</p>

        <UiButton
          label="Privacy policies"
          variant="inline"
          theme="dark"
          onClick={handleButtonClick("To the top")}
        />

        <UiButton
          label="Site map"
          variant="inline"
          theme="dark"
          onClick={handleButtonClick("To the top")}
        />
      </div>
    </footer>
  );
};

export default Footer;
