import "../styles/main.scss";
import { UiButton } from "../components/UiButton";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "../components/Link";

interface MobileHeaderProps {
  onClick: (label: string) => () => void;
  navItems: string[];
  logo: string;
}

const MobileHeader = (props: MobileHeaderProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header__menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <nav
          className={`mobile-header__menu__drop-down ${isOpen ? "max-h-96" : "max-h-0"}`}
        >
          {props.navItems.map((buttonLabel) => (
            <div
              className="mobile-header__menu__drop-down__item"
              key={buttonLabel}
            >
              <UiButton
                label={buttonLabel}
                variant="inline"
                theme="dark"
                onClick={props.onClick(buttonLabel)}
              />
            </div>
          ))}
        </nav>
      </div>

      <div className="mobile-header__logo">
        <Link
          destination="/"
          title="Home"
          children={<img src={props.logo} alt="Logo" />}
        />
      </div>

      <div className="mobile-header__language-selector">
        <UiButton
          label="Tr | En"
          variant="inline"
          theme="dark"
          onClick={props.onClick("buttonLabel")}
        />
      </div>
    </header>
  );
};

export default MobileHeader;
