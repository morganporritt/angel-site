import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In Theaters — Angel Site",
  description: "See which Angel films are playing in theaters now.",
};

export default function TheatersPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        In Theaters
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        See what&apos;s playing on the big screen and grab your tickets.
        (Placeholder page.)
      </p>
    </section>
  );
}
