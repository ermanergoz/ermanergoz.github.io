import { UiButton } from "../components/UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Link from "../components/Link";
import WcagBanner from "../assets/banner-wcag.png";
import GithubBanner from "../assets/banner-github.svg";
import Image from "../components/Image";

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
            label="To the top"
            icon={<FontAwesomeIcon icon={faChevronUp} />}
            variant="secondary"
            theme="dark"
            onClick={handleButtonClick("to_the-top")}
          />
        </div>

        <div className="footer__content__banner">
          <Image src={Logo} alt="Logo" />
          <p>&copy; 2021 - {getCurrentYear()} Yusuf Erman ERGÖZ</p>
        </div>

        <UiButton
          label="Privacy policies"
          variant="inline"
          theme="dark"
          onClick={handleButtonClick("privacy-policies")}
        />

        <div className="footer__content__banner">
          <Link
            destination="https://github.com/ermanergoz/ermanergoz.github.io"
            title="GitHub repository"
            children={<Image src={GithubBanner} alt="GitHub banner" />}
          />
          <Link
            destination="https://www.w3.org/WAI/WCAG2AA-Conformance"
            title="Explanation of WCAG 2 Level AA conformance"
            children={
              <Image
                src={WcagBanner}
                alt="Level AA conformance,
  W3C WAI Web Content Accessibility Guidelines 2.1"
              />
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
