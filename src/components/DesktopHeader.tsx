import "../styles/main.scss";
import { UiButton } from "../components/UiButton";
import Link from "../components/Link";
import Image from "../components/Image";

interface DesktopHeaderProps {
  onClick: (label: string) => () => void;
  navItems: string[];
  logo: string;
}

const DesktopHeader = (props: DesktopHeaderProps) => {
  return (
    <header className="desktop-header">
      <div className="desktop-header__logo">
        <Link
          destination="/"
          title="Home"
          children={<Image src={props.logo} alt="Logo" className="h-12" />}
        />
      </div>

      <div className="desktop-header__navigation">
        <nav className="desktop-header__navigation__item">
          {props.navItems.map((buttonLabel, i) => (
            <UiButton
              key={i}
              label={buttonLabel}
              variant="inline"
              onClick={props.onClick(buttonLabel)}
            />
          ))}
        </nav>
      </div>

      <div className="desktop-header__language-selector">
        <UiButton
          label="Tr | En"
          variant="inline"
          onClick={props.onClick("buttonLabel")}
        />
      </div>
    </header>
  );
};

export default DesktopHeader;
