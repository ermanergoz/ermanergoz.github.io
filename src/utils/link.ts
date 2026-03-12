export function isExternalUrl(href: string, explicit = false): boolean {
  return explicit || href.startsWith("http");
}

export function externalLinkProps(isExternal: boolean) {
  return isExternal ? { rel: "noopener noreferrer" as const, target: "_blank" as const } : {};
}
