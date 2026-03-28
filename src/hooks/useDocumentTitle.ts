import { useEffect } from "react";

const BASE_TITLE = "Yusuf Erman ERGÖZ | Mobile & Web Developer";

export function useDocumentTitle(subtitle?: string) {
  useEffect(() => {
    document.title = subtitle ? `${subtitle} | Yusuf Erman ERGÖZ` : BASE_TITLE;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [subtitle]);
}
