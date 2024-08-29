import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    label: 'Button',
  },
};

export const Inline: Story = {
  args: {
    buttonType: 'inline',
    label: 'Button',
  },
};
