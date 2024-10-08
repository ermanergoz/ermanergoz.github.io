import "../styles/main.scss";
import Logo from "../assets/logo.png";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerOffset = 100;
    const elementPosition = section ? section.getBoundingClientRect().top : 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleButtonClick =
    (buttonLabel: string = "") =>
    () => {
      switch (buttonLabel) {
        case "Home": {
          scrollToSection("home");
          break;
        }
        case "About Me": {
          scrollToSection("about");
          break;
        }
        case "What I Do": {
          scrollToSection("whatIDo");
          break;
        }
        case "Contact Me": {
          scrollToSection("contact");
          break;
        }
      }
    };

  const navItems = ["Home", "About Me", "What I Do", "Contact Me"];

  return (
    <>
      <DesktopHeader
        onClick={handleButtonClick}
        navItems={navItems}
        logo={Logo}
      />
      <MobileHeader
        onClick={handleButtonClick}
        navItems={navItems}
        logo={Logo}
      />
    </>
  );
};

export default Header;
