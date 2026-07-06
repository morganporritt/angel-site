"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TextField from "@/components/TextField";

interface LoginButtonProps {
  /** Extra classes for the trigger button (e.g. responsive visibility). */
  className?: string;
}

export default function LoginButton({ className = "" }: LoginButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`text-sm font-medium text-foreground/80 transition-colors hover:text-foreground ${className}`}
      >
        Log In
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Log in">
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            id="login-email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <TextField
            id="login-password"
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <Button type="submit" variant="primary" size="lg" fullWidth>
            Log in
          </Button>
        </form>
      </Modal>
    </>
  );
}
