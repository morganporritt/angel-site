import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import Button from "@/components/Button";
import TextField from "@/components/TextField";

import Modal from "./Modal";
import type { ModalProps } from "./types";

/** The login form used as the modal body in several stories. */
function LoginForm() {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <TextField
        id="sb-login-email"
        label="Email address"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />
      <TextField
        id="sb-login-password"
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
      />
      <Button type="submit" variant="primary" size="lg" fullWidth>
        Log in
      </Button>
    </form>
  );
}

/** Realistic usage: a trigger button that opens the modal on click. */
function InteractiveModal({ title, children }: ModalProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        {children}
      </Modal>
    </div>
  );
}

/** Renders the modal already open — handy for docs and visual snapshots. */
function OpenModal({ title, children }: ModalProps) {
  const [open, setOpen] = useState(true);
  return (
    <Modal open={open} onClose={() => setOpen(false)} title={title}>
      {children}
    </Modal>
  );
}

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "fullscreen" },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the modal is visible (controlled by the parent).",
    },
    title: { control: "text", description: "Optional heading." },
    onClose: {
      control: false,
      description: "Called on Esc, backdrop click, or the ✕ button.",
    },
    children: { control: false, description: "Modal body content." },
  },
  // `onClose`/`children` are required props; the stories drive them through
  // their `render` wrappers, so satisfy the types with defaults here.
  args: { title: "Log in", open: false, onClose: () => {}, children: null },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Click **Open** to launch the modal — matches how it's used in the app. */
export const Default: Story = {
  render: (args) => (
    <InteractiveModal {...args}>
      <LoginForm />
    </InteractiveModal>
  ),
};

/** The login modal, shown open. */
export const Open: Story = {
  name: "Open (login form)",
  render: (args) => (
    <OpenModal {...args}>
      <LoginForm />
    </OpenModal>
  ),
};

/** Any content can go in the body — here, a simple confirmation message. */
export const Basic: Story = {
  args: { title: "Heads up" },
  render: (args) => (
    <OpenModal {...args}>
      <p className="text-sm leading-relaxed text-muted">
        This is a basic modal. Pass any content as children — a form, a
        confirmation message, or anything else.
      </p>
    </OpenModal>
  ),
};
