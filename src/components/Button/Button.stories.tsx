import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "medium",
    children: "Danger Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large Button",
  },
};

export const disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    children: "Disabled Button",
  },
};
