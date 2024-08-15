import "../styles/main.scss";
import { Button } from "./Button";

interface HeroBannerProps {
  onClick?: () => void;
  title: string;
  introduction: string;
}

const HeroBanner = (props: HeroBannerProps) => {
  return (
    <div className="hero-banner">
      <div className="text-wrapper">
        <h1>{props.title}</h1>
        <h2>{props.introduction}</h2>
      </div>
      <Button
        label="MORE"
        primary={false}
        theme="dark"
        isWide={true}
        onClick={props.onClick}
      />
    </div>
  );
};

export default HeroBanner;
