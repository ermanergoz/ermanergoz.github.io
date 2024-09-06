import "../styles/main.scss";
import { UiButton } from "../components/UiButton";
import Link from "../components/Link";

interface DesktopHeaderProps {
  onClick: (label: string) => () => void;
  navItems: string[];
  logo: string;
}

const DesktopHeader = (props: DesktopHeaderProps) => {
  return (
    <header className="desktop-header">
      <div className="desktop-header__section">
        <Link destination="/" children={<img src={props.logo} alt="Logo" />} />
      </div>

      <div className="desktop-header__navigation">
        <nav className="desktop-header__navigation__item">
          {props.navItems.map((buttonLabel) => (
            <UiButton
              label={buttonLabel}
              variant="inline"
              theme="dark"
              onClick={props.onClick(buttonLabel)}
            />
          ))}
        </nav>
      </div>

      <div className="desktop-header__language-selector">
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

export default DesktopHeader;
