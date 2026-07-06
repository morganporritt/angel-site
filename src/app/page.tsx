import Button from "@/components/Button";
import Link from "@/components/Link";
import TextField from "@/components/TextField";

/* ------------------------------------------------------------------ */
/* Data (presentational placeholders)                                  */
/* ------------------------------------------------------------------ */

const valueProps = [
  {
    title: "Up to 44% off",
    body: "Save on annual memberships and get 2 free tickets — up to $30 per movie.",
  },
  {
    title: "Ad-free & 4K",
    body: "Stream every title in stunning 4K with no interruptions, on any device.",
  },
  {
    title: "A voice that matters",
    body: "Members get voting rights to help decide which stories get told next.",
  },
];

const plans = [
  {
    name: "Basic with Ads",
    price: "$12",
    cadence: "/mo",
    blurb: "Great for getting started.",
    features: ["HD streaming", "Ad-supported", "Watch on 1 device"],
    variant: "secondary" as const,
    featured: false,
  },
  {
    name: "Premium",
    price: "$15",
    cadence: "/mo",
    blurb: "Everything, and then some.",
    features: [
      "Ad-free 4K streaming",
      "2 tickets to every Angel movie",
      "Voting rights",
      "Share with friends & family",
    ],
    variant: "primary" as const,
    featured: true,
  },
  {
    name: "Basic",
    price: "$18",
    cadence: "/mo",
    blurb: "No ads, no fuss.",
    features: ["Ad-free HD streaming", "Watch on 2 devices", "Weekly releases"],
    variant: "secondary" as const,
    featured: false,
  },
];

const shows = [
  { title: "The Wingfeather Saga", genre: "Family", gradient: "from-indigo-500 to-purple-700" },
  { title: "Tuttle Twins", genre: "Animation", gradient: "from-amber-400 to-orange-600" },
  { title: "Dry Bar Comedy", genre: "Comedy", gradient: "from-sky-400 to-blue-700" },
  { title: "His Only Son", genre: "Drama", gradient: "from-rose-500 to-red-800" },
  { title: "A Week Away", genre: "Musical", gradient: "from-emerald-400 to-teal-700" },
  { title: "Young Washington", genre: "History", gradient: "from-slate-500 to-slate-800" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Pricing />
      <Library />
      <JoinCta />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 md:py-36">
        <span className="inline-flex items-center rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted">
          Celebrating stories that amplify light
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Watch and support entertainment that{" "}
          <span className="text-primary">amplifies light</span>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Save up to 44% on annual memberships and get 2 free tickets. Support
          films &amp; filmmakers that share your values. Cancel anytime.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Already a member?
          </Button>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
        {valueProps.map((prop) => (
          <div key={prop.title} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-foreground">
              {prop.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{prop.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="guild" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Choose your plan
        </h2>
        <p className="mt-4 text-muted">
          Join over 2 million members bringing purpose-driven stories to life.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              plan.featured
                ? "border-primary bg-surface shadow-lg shadow-primary/10 md:scale-105"
                : "border-border bg-surface/50"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted">{plan.blurb}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm text-muted">{plan.cadence}</span>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-muted">
                  <span aria-hidden className="mt-0.5 text-primary">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.variant}
              size="md"
              fullWidth
              className="mt-8"
            >
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Library() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A library of shows you&apos;ll love
            </h2>
            <p className="mt-4 text-muted">
              New titles every week, thanks to members like you.
            </p>
          </div>
          <Link href="/watch" variant="default" className="whitespace-nowrap">
            View all shows →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {shows.map((show) => (
            <div key={show.title} className="group flex flex-col gap-3">
              <div
                className={`aspect-[2/3] rounded-xl bg-gradient-to-br ${show.gradient} p-4 shadow-md transition-transform duration-200 group-hover:-translate-y-1`}
              >
                <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/90">
                  {show.genre}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {show.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinCta() {
  return (
    <section id="login" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join the movement
          </h2>
          <p className="mt-4 text-muted">
            Sign up to get early access, showtimes, and member-only news.
          </p>

          <form className="mt-8 flex flex-col gap-4">
            <TextField
              id="signup-name"
              label="Full name"
              placeholder="Jane Appleseed"
              autoComplete="name"
            />
            <TextField
              id="signup-email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              hint="We'll never share your email. Cancel anytime."
            />
            <Button type="submit" variant="primary" size="lg" fullWidth>
              Get Started
            </Button>
            <p className="text-xs text-muted">
              Already a member?{" "}
              <Link href="/login" variant="default">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
