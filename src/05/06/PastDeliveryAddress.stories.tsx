import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

export default {
  component: PastDeliveryAddress,
  args: {
    options: [
      {
        id: "xxx",
        value: "xxx",
        children: "우16397 경기도 수원시 권선구 매곡로 67",
      },
    ],
  },
} as ComponentMeta<typeof PastDeliveryAddress>;

type Story = ComponentStoryObj<typeof PastDeliveryAddress>;

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Enabled: Story = {
  args: {
    disabled: false,
  },
};
