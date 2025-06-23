import "../styles/main.scss";
import Logo from "../assets/logo.png";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleButtonClick = (buttonLabel: string = "") => {
    return () => {
      const sectionMap: { [key: string]: { path: string; sectionId: string } } = {
        "Home": { path: "/", sectionId: "home" },
        "About Me": { path: "/#about", sectionId: "about" },
        "What I Do": { path: "/#whatIDo", sectionId: "whatIDo" },
        "Contact Me": { path: "/#contact", sectionId: "contact" },
      };
  
      const { path, sectionId } = sectionMap[buttonLabel] || {};
  
      if (path && sectionId) {
        if (window.location.pathname === "/") {
          scrollToSection(sectionId);
        } else {
          navigate(path);
        }
      }
    };
  };
  
  useEffect(() => {
    if (location.hash) {
      const targetSection = location.hash.substring(1);
      scrollToSection(targetSection);
    }
  }, [location]);
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
