import "../styles/main.scss";

interface ButtonProps {
  buttonType?: "primary" | "secondary" | "inline";
  theme?: "light" | "dark";
  isWide?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  buttonType: buttonType = "primary",
  theme: theme = "light",
  isWide = false,
  label,
  ...props
}: ButtonProps) => {
  const isWideButton = isWide ? "wide" : "";
  return (
    <button
      type="button"
      className={["button", `${theme} ${isWideButton}`, buttonType].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
