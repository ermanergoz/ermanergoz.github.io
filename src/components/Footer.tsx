import { UiButton } from "../components/UiButton";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Link from "../components/Link";
import WcagBanner from "../assets/banner-wcag.png";
import GithubBanner from "../assets/logo-github-white.svg";
import Image from "../components/Image";

const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = (navigateTo: string) => () => {
    switch (navigateTo) {
      default: {
        navigate(navigateTo);
        break;
      }
    }
  };

  const getCurrentYear = (): number => new Date().getFullYear();

  return (    
    <footer>
    <div className="outer"></div>
      <div className="footer">
      <div className="footer__content">
        <div className="footer__content__banner">
          <Image src={Logo} alt="Logo" className="h-12 lg:h-20" />
          <p>&copy; 2021 - {getCurrentYear()} Yusuf Erman ERGÖZ</p>
        </div>

        <UiButton
          label="Privacy policies"
          variant="inline"
          onClick={handleButtonClick("privacy-policies")}
        />

        <div className="footer__content__banner">
          <Link
            destination="https://github.com/ermanergoz/ermanergoz.github.io"
            title="GitHub repository"
            children={<Image src={GithubBanner} alt="GitHub banner" />}
            external={true}
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
      </div>
    </footer>
  );
};

export default Footer;
