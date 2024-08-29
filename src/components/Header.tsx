import "../styles/main.scss";
import Logo from "../assets/logo.svg";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


interface HeaderProps {
  onClick: (label: string) => () => void;
}

const Header = (props: HeaderProps) => {
  const navItems = ["About", "Services", "Portfolio", "Contact"];

  return (
    <>
      <DesktopHeader onClick={props.onClick} navItems={navItems} logo={Logo} />
      <MobileHeader onClick={props.onClick} navItems={navItems} logo={Logo} />
    </>
  );
};

export default Header;
