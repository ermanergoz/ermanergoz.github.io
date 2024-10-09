import "../styles/main.scss";

interface UiButtonProps {
  variant?: "primary" | "secondary" | "inline";
  theme?: "light" | "dark";
  isWide?: boolean;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const UiButton = ({
  variant = "primary",
  theme = "dark",
  isWide = false,
  label,
  icon,
  ...props
}: UiButtonProps) => {
  const isWideButton = isWide ? "wide" : "";
  return (
    <button
      className={[
        "ui-button",
        `ui-button--${theme}`,
        `ui-button--${isWideButton}`,
        `ui-button__${variant}`,
      ].join(" ")}
      aria-label={label}
      {...props}
    >
      {icon && <span>{icon}&emsp;&emsp;</span>}
      {label}
    </button>
  );
};
