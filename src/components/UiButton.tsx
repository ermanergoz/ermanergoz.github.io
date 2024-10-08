import "../styles/main.scss";

interface UiButtonProps {
  variant?: "primary" | "secondary" | "inline" | "hero";
  theme?: "light" | "dark";
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const UiButton = ({
  variant = "primary",
  theme = "dark",
  label,
  icon,
  ...props
}: UiButtonProps) => {
  return (
    <button
      className={[
        "ui-button",
        `ui-button--${theme}`,
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
