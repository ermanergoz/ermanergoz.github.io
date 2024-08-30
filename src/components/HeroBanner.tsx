import "../styles/main.scss";
import { UiButton } from "./UiButton";

interface HeroBannerProps {
  onClick?: () => void;
  title: string;
  introduction: string;
}

const HeroBanner = (props: HeroBannerProps) => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__wrapper">
        <h1 className="hero-banner__title">{props.title}</h1>
        <h2 className="hero-banner__subtitle">{props.introduction}</h2>
      </div>
      <UiButton
        label="MORE"
        variant={"secondary"}
        theme="dark"
        isWide={true}
        onClick={props.onClick}
      />
    </div>
  );
};

export default HeroBanner;
