import "../styles/main.scss";
import Logo from "../assets/logo.svg";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const handleButtonClick = (buttonLabel: string = "") => () => {
    console.log(`${buttonLabel} is clicked`);
  };

  const navItems = ["About", "Services", "Portfolio", "Contact"];

  return (
    <>
      <DesktopHeader onClick={handleButtonClick} navItems={navItems} logo={Logo} />
      <MobileHeader onClick={handleButtonClick} navItems={navItems} logo={Logo} />
    </>
  );
};

export default Header;
