import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch — Angel Site",
  description: "Browse shows and films on Angel Site.",
};

export default function WatchPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Watch
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Browse the full library of shows and films. (Placeholder page.)
      </p>
    </section>
  );
}
