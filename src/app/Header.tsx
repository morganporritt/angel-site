import Button from "@/components/Button";
import Link from "@/components/Link";

const navLinks = [
  { label: "Watch", href: "/watch" },
  { label: "In Theaters", href: "/theaters" },
  { label: "Guild", href: "/guild" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" variant="nav" className="!text-foreground">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary">ANGEL</span> SITE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} variant="nav">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            variant="nav"
            className="hidden sm:inline-flex"
          >
            Log In
          </Link>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
