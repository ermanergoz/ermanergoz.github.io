import Header from "../components/DesktopHeader";
import Logo from "../assets/logo.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Default = StoryObj<typeof meta>;

export const Default: Default = {
  args: {
    navItems: ["About", "Services", "Portfolio", "Contact"],
    logo: Logo,
    onClick: (label: string) => () => console.log(`Clicked on ${label}`),
  },
};
