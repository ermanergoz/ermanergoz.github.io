import "../styles/main.scss";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = (props: ImageProps) => {
  return <img src={props.src} alt={props.alt} aria-label={props.alt} />;
};

export default Image;
