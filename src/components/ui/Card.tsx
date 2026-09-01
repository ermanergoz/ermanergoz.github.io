import Image from "./Image";

interface CardProps {
  icon: string;
  iconAlt: string;
  title: string;
  text: string;
}

function Card({ icon, iconAlt, title, text }: CardProps) {
  return (
    <article className="card">
      <div className="card__bg-icon">
        <Image src={icon} alt={iconAlt} width={120} height={120} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default Card;
