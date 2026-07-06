import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TextField from "./TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: { control: "text", description: "Ties the label to the input (required)." },
    label: { control: "text", description: "Visible field label." },
    hint: { control: "text", description: "Helper text shown below the input." },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "tel"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    id: "email",
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "We'll never share your email. Cancel anytime.",
  },
};

export const WithoutLabel: Story = {
  args: {
    id: "search",
    label: undefined,
    type: "search",
    placeholder: "Search shows…",
  },
};

export const Password: Story = {
  args: {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-email",
    disabled: true,
    defaultValue: "member@example.com",
  },
};

/** The pair of fields used by the home-page sign-up form. */
export const SignUpForm: Story = {
  render: () => (
    <form className="flex flex-col gap-4">
      <TextField id="signup-name" label="Full name" placeholder="Jane Appleseed" />
      <TextField
        id="signup-email"
        label="Email address"
        type="email"
        placeholder="you@example.com"
        hint="We'll never share your email. Cancel anytime."
      />
    </form>
  ),
};
