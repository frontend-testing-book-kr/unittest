import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { deliveryAddresses } from "./fixtures";
import { Form } from "./Form";

export default {
  component: Form,
} as ComponentMeta<typeof Form>;

type Story = ComponentStoryObj<typeof Form>;

export const NoDeliveryAddresses: Story = {
  storyName: "이전 배송지가 없는 경우",
  args: { deliveryAddresses: [] },
};

export const HasDeliveryAddresses: Story = {
  storyName: "이전 배송지가 있는 경우",
  args: { deliveryAddresses },
};
