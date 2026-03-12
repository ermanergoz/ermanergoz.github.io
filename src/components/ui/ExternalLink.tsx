import type { ReactNode } from "react";
import { isExternalUrl, externalLinkProps } from "../../utils/link";

interface ExternalLinkProps {
  href: string;
  title?: string;
  children: ReactNode;
  external?: boolean;
}

function ExternalLink({
  href,
  title = href,
  children,
  external = false,
}: ExternalLinkProps) {
  const isExternal = isExternalUrl(href, external);

  return (
    <a
      className="external-link"
      href={href}
      title={title}
      aria-label={title}
      {...externalLinkProps(isExternal)}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
