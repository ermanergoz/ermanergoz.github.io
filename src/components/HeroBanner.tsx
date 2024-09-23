import "../styles/main.scss";
import { UiButton } from "./UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Greeting from "../components/Greeting";

const HeroBanner = () => {
  const onMoreClicked =
    (buttonLabel: string = "") =>
    () => {
      console.log(`${buttonLabel} is clicked`);
    };

  return (
    <div className="hero-banner">
      <Greeting />
      <UiButton
        label="MORE"
        icon={
          <FontAwesomeIcon
            className="hero-banner__chevron-animation"
            icon={faChevronDown}
          />
        }
        variant={"secondary"}
        theme="dark"
        isWide={true}
        onClick={onMoreClicked("More")}
      />
    </div>
  );
};

export default HeroBanner;
