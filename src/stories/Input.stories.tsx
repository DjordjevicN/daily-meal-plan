import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};
export default meta;
export const Default = (args: StoryObj<typeof Input>) => <Input {...args} />;
