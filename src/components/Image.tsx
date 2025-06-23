import "../styles/main.scss";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = (props: ImageProps) => {
  return (
    <img
      className={`${props.className}`}
      src={props.src}
      alt={props.alt}
      aria-label={props.alt}
      loading="lazy"
    />
  );
};

export default Image;
