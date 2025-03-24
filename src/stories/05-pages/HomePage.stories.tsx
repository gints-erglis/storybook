import { Meta, StoryObj } from "@storybook/react";
import HomePage from "../05-pages/HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen", // Ensures Storybook doesn't wrap it in a small box
  },
} as Meta<typeof HomePage>;

export const Default: StoryObj<typeof HomePage> = {};
