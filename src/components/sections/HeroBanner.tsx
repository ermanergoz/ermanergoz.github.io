import { Button } from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Greeting from "./Greeting";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useTranslation } from "react-i18next";

function HeroBanner() {
  const scrollToSection = useScrollToSection();
  const { t } = useTranslation();

  return (
    <div className="hero-banner">
      <Greeting />
      <div className="hero-banner__button-holder">
        <Button
          theme="dark"
          label={t("greeting.more")}
          icon={
            <FontAwesomeIcon
              className="hero-banner__chevron-animation"
              icon={faChevronDown}
              aria-hidden="true"
            />
          }
          variant="inline"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </div>
  );
}

export default HeroBanner;
