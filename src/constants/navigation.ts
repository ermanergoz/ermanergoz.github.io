export const NAV_ITEM_KEYS = ["home", "aboutMe", "whatIDo", "contactMe"] as const;

export type NavItemKey = (typeof NAV_ITEM_KEYS)[number];

export const SECTION_MAP: Record<NavItemKey, string> = {
  home: "home",
  aboutMe: "about",
  whatIDo: "what-i-do",
  contactMe: "contact",
};

export const HEADER_OFFSET_PX = 100;
