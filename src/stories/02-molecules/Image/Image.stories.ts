import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

export default {
  title: "Atoms/Image",
  component: Image,
  args: {
    src: "/assets/images/image-1.jpg",
    alt: "Nature",
    width: 100,
    height: 100,
  },
} satisfies Meta<typeof Image>;

export const Default: StoryObj<typeof Image> = {};
