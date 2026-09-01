import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import Image from "../ui/Image";
import type { NavItemKey } from "../../constants/navigation";
import type { NavItem, NavItemProps } from "../../types/navigation";

interface DesktopHeaderProps {
  getNavItemProps: (key: NavItemKey) => NavItemProps;
  onLanguageToggle: () => void;
  navItems: NavItem[];
  logo: string;
  activeKey: NavItemKey | null;
}

function DesktopHeader({
  getNavItemProps,
  onLanguageToggle,
  navItems,
  logo,
  activeKey,
}: DesktopHeaderProps) {
  return (
    <header className="desktop-header">
      <div className="desktop-header__logo">
        <Link to="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Erman Ergoz logo"
            className="h-12 w-auto"
            width={240}
            height={78}
            loading="eager"
          />
        </Link>
      </div>

      <nav aria-label="Desktop navigation" className="desktop-header__navigation">
        <ul className="desktop-header__navigation-list" role="list">
          {navItems.map((item) => {
            const { to, onClick } = getNavItemProps(item.key);
            return (
              <li key={item.key}>
                <Link
                  to={to}
                  onClick={onClick}
                  className={`button button--dark button--inline${item.key === activeKey ? " button--active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="desktop-header__language-selector">
        <Button
          label="Tr | En"
          variant="inline"
          onClick={onLanguageToggle}
          ariaLabel="Tr | En, switch language"
        />
      </div>
    </header>
  );
}

export default DesktopHeader;
