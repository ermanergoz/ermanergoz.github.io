import "../styles/main.scss";
import { UiButton } from "./UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeroBanner = () => {
  const onMoreClicked =
    (buttonLabel: string = "") =>
    () => {
      console.log(`${buttonLabel} is clicked`);
    };

  return (
    <div className="hero-banner">
      <div className="hero-banner__wrapper">
        <h1 className="hero-banner__title">{"HELLO WORLD!"}</h1>
        <h2 className="hero-banner__subtitle">{"~Development in progress~"}</h2>
      </div>
      <UiButton
        label="MORE"
        icon={<FontAwesomeIcon icon={faChevronDown} />}
        variant={"secondary"}
        theme="dark"
        isWide={true}
        onClick={onMoreClicked("More")}
      />
    </div>
  );
};

export default HeroBanner;
