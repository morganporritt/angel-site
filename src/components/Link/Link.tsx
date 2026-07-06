import NextLink from "next/link";

import type { LinkProps, LinkVariant } from "./types";

const variantStyles: Record<LinkVariant, string> = {
  default:
    "text-primary underline-offset-4 transition-colors hover:text-primary-hover hover:underline",
  nav: "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
  muted: "text-sm text-muted transition-colors hover:text-foreground",
  footer: "text-sm text-muted transition-colors hover:text-foreground",
};

export default function Link({
  href,
  variant = "default",
  className = "",
  children,
  ...props
}: LinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      href={href}
      className={`${variantStyles[variant]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </NextLink>
  );
}
