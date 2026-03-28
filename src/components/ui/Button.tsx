import type { ReactNode, MouseEvent } from "react";
import { isExternalUrl, externalLinkProps } from "../../utils/link";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "inline";
  theme?: "light" | "dark";
  isWide?: boolean;
  label: string;
  icon?: ReactNode;
  isFocusable?: boolean;
  ariaLabel?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && props.href != null && props.href !== "";
}

function buildClassName(
  theme: string,
  variant: string,
  isWide: boolean,
  isIconOnly: boolean,
): string {
  const classes = ["button", `button--${theme}`, `button--${variant}`];
  if (isWide) classes.push("button--wide");
  if (isIconOnly) classes.push("button--icon-only");
  return classes.join(" ");
}

export function Button(props: ButtonProps) {
  const {
    isFocusable = true,
    variant = "primary",
    theme = "dark",
    isWide = false,
    label,
    icon,
    ariaLabel,
  } = props;

  const iconOnly = icon != null && !label;
  const className = buildClassName(theme, variant, isWide, iconOnly);
  const tabIndex = isFocusable ? undefined : -1;

  if (isLinkProps(props)) {
    const { href, external = false, onClick } = props;
    const isExternal = isExternalUrl(href, external);

    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel ?? label}
        tabIndex={tabIndex}
        onClick={onClick}
        {...externalLinkProps(isExternal)}
      >
        {icon && <span className="button__icon">{icon}</span>}
        {label}
      </a>
    );
  }

  const { onClick } = props as ButtonAsButton;

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel ?? label}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {label}
    </button>
  );
}
