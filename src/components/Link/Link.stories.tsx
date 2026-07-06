import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Link from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "nav", "muted", "footer"],
      description: "Contextual styling for where the link lives.",
    },
    href: { control: "text", description: "Destination URL or anchor." },
    children: { control: "text", description: "Link text." },
  },
  args: {
    href: "#",
    children: "Learn more",
    variant: "default",
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default", children: "Learn more" },
};

export const Nav: Story = {
  args: { variant: "nav", children: "Watch" },
};

export const Muted: Story = {
  args: { variant: "muted", children: "Log In" },
};

export const Footer: Story = {
  args: { variant: "footer", children: "Privacy Policy" },
};

/** External `http(s)` hrefs automatically get `target="_blank"` + `rel`. */
export const External: Story = {
  args: {
    variant: "default",
    href: "https://www.angel.com",
    children: "Visit angel.com ↗",
  },
};

/** Every variant together for comparison. */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-3">
      <Link {...args} variant="default">
        Default link
      </Link>
      <Link {...args} variant="nav">
        Nav link
      </Link>
      <Link {...args} variant="muted">
        Muted link
      </Link>
      <Link {...args} variant="footer">
        Footer link
      </Link>
    </div>
  ),
};
