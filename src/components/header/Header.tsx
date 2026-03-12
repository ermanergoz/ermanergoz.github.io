import logo from "../../assets/images/logo.webp";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import { NAV_ITEM_KEYS, SECTION_MAP } from "../../constants/navigation";
import type { NavItemKey } from "../../constants/navigation";
import type { NavItemProps } from "../../types/navigation";

function Header() {
  const location = useLocation();
  const scrollToSection = useScrollToSection();
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();

  const isHome = location.pathname === "/";
  const activeKey = useActiveSection(isHome);

  const getNavItemProps = useCallback(
    (key: NavItemKey): NavItemProps => {
      const sectionId = SECTION_MAP[key];
      const path = sectionId === "home" ? "/" : `/#${sectionId}`;

      return {
        to: path,
        onClick: isHome
          ? (e) => {
              e.preventDefault();
              scrollToSection(sectionId);
            }
          : undefined,
      };
    },
    [isHome, scrollToSection],
  );

  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash) {
        scrollToSection(location.hash.slice(1));
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash, scrollToSection]);

  const navItems = useMemo(
    () =>
      NAV_ITEM_KEYS.map((key) => ({
        key,
        label: t(`nav.${key}`),
      })),
    [t],
  );

  return (
    <>
      <DesktopHeader
        getNavItemProps={getNavItemProps}
        onLanguageToggle={toggleLanguage}
        navItems={navItems}
        logo={logo}
        activeKey={activeKey}
      />
      <MobileHeader
        getNavItemProps={getNavItemProps}
        onLanguageToggle={toggleLanguage}
        navItems={navItems}
        logo={logo}
        activeKey={activeKey}
      />
    </>
  );
}

export default Header;
