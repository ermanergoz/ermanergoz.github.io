import Image from "../components/Image";

interface CardProps {
  icon: string;
  imgAlt: string;
  title: string;
  text: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card__title">
        <Image src={props.icon} alt={props.imgAlt} />
        <h1>{props.title}</h1>
      </div>

      <p>{props.text}</p>
    </div>
  );
};

export default Card;
