import { render, screen } from "@testing-library/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

describe("이전 배송지", () => {
  const options = [
    {
      id: "xxx",
      value: "xxx",
      children: "우16397 경기도 수원시 권선구 매곡로 67",
    },
  ];
  test("disabled={true}인 경우 combobox도 비활성화된다", () => {
    render(<PastDeliveryAddress disabled={true} options={options} />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
