import "../styles/main.scss";

interface LinkProps {
  destination: string;
  title?: string;
  children: React.ReactNode;
  external?: boolean;
}

const Link = ({ destination, title = destination, children, external = false }: LinkProps) => {
  const isExternalLink = external || destination.startsWith("http");

  return (
    <a
      className="link"
      href={destination}
      title={title}
      aria-label={title}
      {...(isExternalLink && { rel: "noopener noreferrer", target: "_blank" })}
    >
      {children}
    </a>
  );
};

export default Link;
