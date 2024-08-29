import "../styles/main.scss";
import { Button } from "../components/Button";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

interface MobileHeaderProps {
  onClick: (label: string) => () => void;
  navItems: string[];
  logo: string;
}

const MobileHeader = (props: MobileHeaderProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="left-section">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <nav
          className={`drop-down-menu ${isOpen ? "max-h-96" : "max-h-0"}`}
        >
          {props.navItems.map((buttonLabel) => (
            <div className="menu-item" key={buttonLabel}>
              <Button
                label={buttonLabel}
                buttonType="inline"
                theme="dark"
                onClick={props.onClick(buttonLabel)}
              />
            </div>
          ))}
        </nav>
      </div>

      <div className="center-section">
        <a href="/">
          <img src={props.logo} alt="Logo" />
        </a>
      </div>

      <div className="right-section">
        <Button
          label="Tr | En"
          buttonType="inline"
          theme="dark"
          onClick={props.onClick("buttonLabel")}
        />
      </div>
    </header>
  );
};

export default MobileHeader;
