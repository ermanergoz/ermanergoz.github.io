import { UiButton } from "./UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Greeting from "../components/Greeting";

const HeroBanner = () => {
  const onMoreClicked = () => () => {
    const section = document.getElementById("about");
    const headerOffset = 100;
    const elementPosition = section ? section.getBoundingClientRect().top : 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-banner">
      <Greeting />
      <div className="hero-banner__button-holder">
        <UiButton
          theme="dark"
          label="MORE"
          icon={
            <FontAwesomeIcon
              className="hero-banner__chevron-animation"
              icon={faChevronDown}
            />
          }
          variant={"inline"}
          onClick={onMoreClicked()}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
