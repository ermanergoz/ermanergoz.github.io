import { Meta, StoryObj } from "@storybook/react";
import HeroBanner from "../components/HeroBanner";

const meta = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#1e1f22",
        },
      ],
    },
  },
  argTypes: {
    title: { control: "text" },
    introduction: { control: "text" },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Default = StoryObj<typeof meta>;

export const Default: Default = {
  args: {
    title: "SOME TITLE",
    introduction: "A fancy introduction",
  },
};
