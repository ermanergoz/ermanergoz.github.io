import "../styles/main.scss";
import { Button } from "../components/Button";

interface DesktopHeaderProps {
  onClick: (label: string) => () => void;
  navItems: string[];
  logo: string;
}

const DesktopHeader = (props: DesktopHeaderProps) => {
  return (
    <header className="dektop-header">
      <div className="left-section">
        <a href="/">
          <img src={props.logo} alt="Logo" />
        </a>
      </div>

      <div className="center-section">
        <nav>
          {props.navItems.map((buttonLabel) => (
            <Button
              key={buttonLabel}
              label={buttonLabel}
              buttonType="inline"
              theme="dark"
              onClick={props.onClick(buttonLabel)}
            />
          ))}
        </nav>
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

export default DesktopHeader;
