import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkVariant = "default" | "nav" | "muted" | "footer";

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: LinkVariant;
  children: ReactNode;
}
