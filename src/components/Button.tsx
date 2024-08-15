import "../styles/main.scss";

interface ButtonProps {
  primary?: boolean;
  theme?: "light" | "dark";
  isWide?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  theme: theme = "light",
  isWide = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "primary" : "secondary";
  const isWideButton = isWide ? "wide" : "";
  return (
    <button
      type="button"
      className={["button", `${theme} ${isWideButton}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
