import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UiButton } from '../components/UiButton';

const meta = {
  title: 'Components/UiButton',
  component: UiButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'UiButton',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'UiButton',
  },
};

export const Inline: Story = {
  args: {
    variant: 'inline',
    label: 'UiButton',
  },
};
