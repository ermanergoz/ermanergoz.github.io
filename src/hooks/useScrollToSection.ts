import { useCallback } from "react";
import { HEADER_OFFSET_PX } from "../constants/navigation";

export function useScrollToSection() {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const top =
      element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);
}
