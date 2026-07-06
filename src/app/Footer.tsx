import Link from "@/components/Link";

const footerColumns = [
  {
    heading: "Watch",
    links: [
      { label: "Shows", href: "/watch" },
      { label: "In Theaters", href: "/theaters" },
      { label: "Free", href: "/watch" },
      { label: "View All", href: "/watch" },
    ],
  },
  {
    heading: "Genres",
    links: [
      { label: "Comedy", href: "/watch" },
      { label: "Drama", href: "/watch" },
      { label: "Documentary", href: "/watch" },
      { label: "Family", href: "/watch" },
      { label: "Faith Based", href: "/watch" },
    ],
  },
  {
    heading: "Invest",
    links: [
      { label: "Acceleration Fund", href: "#" },
      { label: "For Filmmakers", href: "#" },
      { label: "Projects", href: "#" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Company", href: "#" },
      { label: "Mission", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Devices", href: "#" },
    ],
  },
];

const socials = ["Facebook", "YouTube", "Twitter", "Instagram", "TikTok"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-1">
            <Link href="/" variant="nav" className="!text-foreground">
              <span className="text-lg font-bold tracking-tight">
                <span className="text-primary">ANGEL</span> SITE
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A new kind of streaming platform — driven by purpose and built to
              share stories that amplify light.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground">
                {column.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} variant="footer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © 2026 Angel Site. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <Link key={social} href="#" variant="footer">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
