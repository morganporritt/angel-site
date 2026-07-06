import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guild — Angel Site",
  description: "Join the Angel Guild and help decide which stories get told.",
};

export default function GuildPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        The Guild
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Join over 2 million members bringing purpose-driven stories to life.
        (Placeholder page.)
      </p>
    </section>
  );
}
