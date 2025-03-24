import { Meta, StoryObj } from "@storybook/react";
import SidebarPage from "../05-pages/SidebarPage";

export default {
  title: "Pages/SidebarPage",
  component: SidebarPage,
  parameters: {
    layout: "fullscreen", // Ensures Storybook doesn't wrap it in a small box
  },
} as Meta<typeof SidebarPage>;

export const Default: StoryObj<typeof SidebarPage> = {};
