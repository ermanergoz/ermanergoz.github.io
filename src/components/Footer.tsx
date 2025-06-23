import { UiButton } from "../components/UiButton";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Link from "../components/Link";
import WcagBanner from "../assets/banner-wcag.png";
import GithubBanner from "../assets/logo-github-white.svg";
import Image from "../components/Image";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPolicyPage = location.pathname === "/privacy-policies";
  const targetPath = isPolicyPage ? "/" : "/privacy-policies";
  const buttonLabel = isPolicyPage ? "Home" : "Privacy Policies";

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
    <footer className="footer">
      <div className="footer__content">
        <Image src={Logo} alt="Logo" className="footer__content__logo" />
        <p className="footer__content__copyright">
          &copy; 2021 - {getCurrentYear()} Yusuf Erman ERGÖZ
        </p>
        <UiButton
          label={buttonLabel}
          variant="inline"
          onClick={handleButtonClick(targetPath)}
        />
        <div className="footer__content__banner">
          <Link
            destination="https://github.com/ermanergoz/ermanergoz.github.io"
            title="GitHub repository"
            children={<Image src={GithubBanner} alt="GitHub repository" />}
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
    </footer>
  );
};

export default Footer;
