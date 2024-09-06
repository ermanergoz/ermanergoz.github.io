import "../styles/main.scss";

interface LinkProps {
  destination: string;
  children: React.ReactNode;
}

const Link = (props: LinkProps) => {
  return (
    <a className="link" href={props.destination}>
      {props.children}
    </a>
  );
};

export default Link;
