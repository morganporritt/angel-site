import type { Metadata } from "next";

import Link from "@/components/Link";

import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Log in — Angel Site",
  description: "Log in to your Angel Site account.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Log in</h1>
      <p className="mt-2 text-muted">
        Welcome back. Enter your details to continue.
      </p>

      <LoginForm />

      <p className="mt-6 text-sm text-muted">
        New to Angel Site?{" "}
        <Link href="/#login" variant="default">
          Create an account
        </Link>
      </p>
    </section>
  );
}
