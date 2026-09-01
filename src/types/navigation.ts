import type { NavItemKey } from "../constants/navigation";

export interface NavItem {
  key: NavItemKey;
  label: string;
}

export interface NavItemProps {
  to: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
