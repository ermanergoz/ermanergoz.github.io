import { useEffect, useRef, useState } from "react";
import { NAV_ITEM_KEYS, SECTION_MAP } from "../constants/navigation";
import type { NavItemKey } from "../constants/navigation";

const SECTION_IDS = NAV_ITEM_KEYS.map((key) => SECTION_MAP[key]);

const SECTION_ID_TO_NAV_KEY: Record<string, NavItemKey> = Object.fromEntries(
  Object.entries(SECTION_MAP).map(([key, sectionId]) => [sectionId, key as NavItemKey]),
);

export function useActiveSection(isHome: boolean): NavItemKey | null {
  const [activeKey, setActiveKey] = useState<NavItemKey | null>(
    isHome ? "home" : null,
  );
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    if (!isHome) {
      setActiveKey(null);
      return;
    }

    const updateActive = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 50;

      if (atBottom) {
        setActiveKey(NAV_ITEM_KEYS[NAV_ITEM_KEYS.length - 1]);
        return;
      }

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        if (visibleSections.current.has(SECTION_IDS[i])) {
          setActiveKey(SECTION_ID_TO_NAV_KEY[SECTION_IDS[i]]);
          return;
        }
      }

      setActiveKey("home");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        }
        updateActive();
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [isHome]);

  return activeKey;
}
