import "../styles/main.scss";

interface UiButtonProps {
  variant?: "primary" | "secondary" | "inline";
  theme?: "light" | "dark";
  isWide?: boolean;
  label: string;
  onClick?: () => void;
}

export const UiButton = ({
  variant: variant = "primary",
  theme: theme = "light",
  isWide = false,
  label,
  ...props
}: UiButtonProps) => {
  const isWideButton = isWide ? "wide" : "";
  return (
    <button
      className={["ui-button", `ui-button--${theme} ui-button--${isWideButton}`, `ui-button__${variant}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
