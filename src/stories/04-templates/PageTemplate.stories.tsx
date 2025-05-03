import { Meta, StoryObj } from "@storybook/react";
import PageTemplate from "../04-templates/PageTemplate";

export default {
  title: "04-Templates/PageTemplate",
  component: PageTemplate,
} as Meta<typeof PageTemplate>;

export const Default: StoryObj<typeof PageTemplate> = {
  args: {
    children: <p>Content goes here...</p>,
  },
};
