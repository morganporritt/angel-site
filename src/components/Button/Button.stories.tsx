import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "tertiary"],
      description: "Visual emphasis of the button.",
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Padding / font-size scale.",
    },
    fullWidth: {
      control: "boolean",
      description: "Stretch the button to fill its container.",
    },
    disabled: { control: "boolean" },
    children: { control: "text", description: "Button label." },
  },
  args: {
    children: "Get Started",
    variant: "primary",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

/** All three variants side by side. */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="tertiary">
        Tertiary
      </Button>
    </div>
  ),
};

/** The three sizes, `sm` through `lg`. */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

/** `fullWidth` makes the button expand to fill its container. */
export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-80">
        <Story />
      </div>
    ),
  ],
};
