import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Sling as Hamburger } from "hamburger-react";
import { useCallback, useState } from "react";
import Image from "../ui/Image";
import type { NavItemKey } from "../../constants/navigation";
import type { NavItem, NavItemProps } from "../../types/navigation";

interface MobileHeaderProps {
  getNavItemProps: (key: NavItemKey) => NavItemProps;
  onLanguageToggle: () => void;
  navItems: NavItem[];
  logo: string;
  activeKey: NavItemKey | null;
}

function MobileHeader({
  getNavItemProps,
  onLanguageToggle,
  navItems,
  logo,
  activeKey,
}: MobileHeaderProps) {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header className="mobile-header">
      <div className="mobile-header__menu">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          label="Toggle navigation menu"
        />
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`mobile-header__menu-dropdown ${isOpen ? "mobile-header__menu-dropdown--open" : ""}`}
        >
          <ul role="list">
            {navItems.map((item) => {
              const { to, onClick } = getNavItemProps(item.key);
              const handleClick = (
                e: React.MouseEvent<HTMLAnchorElement>,
              ) => {
                onClick?.(e);
                closeMenu();
              };
              return (
                <li
                  className="mobile-header__menu-dropdown-item"
                  key={item.key}
                >
                  <Link
                    to={to}
                    onClick={handleClick}
                    className={`button button--dark button--inline${item.key === activeKey ? " button--active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mobile-header__logo">
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

      <div className="mobile-header__language-selector">
        <Button
          label="Tr | En"
          variant="inline"
          onClick={() => {
            onLanguageToggle();
            closeMenu();
          }}
          ariaLabel="Tr | En, switch language"
        />
      </div>
    </header>
  );
}

export default MobileHeader;
