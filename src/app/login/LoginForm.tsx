"use client";

import { useState, type FormEvent } from "react";

import Button from "@/components/Button";
import TextField from "@/components/TextField";

type Status = "idle" | "submitting" | "success" | "error";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Logged in.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const submitting = status === "submitting";

  return (
    <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        id="login-email"
        name="email"
        label="Email address"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={submitting}
      />
      <TextField
        id="login-password"
        name="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        disabled={submitting}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={submitting}
      >
        {submitting ? "Logging in…" : "Log in"}
      </Button>

      {(status === "success" || status === "error") && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === "error" ? "text-red-400" : "text-primary"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
